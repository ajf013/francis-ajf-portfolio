import React, { useState, useEffect, useRef } from "react";
import "./CopilotWidget.css";

const API_KEY = import.meta.env.VITE_AZURE_OPENAI_KEY || "";
const ENDPOINT = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT || "https://fcruz-portfolio-openai.openai.azure.com/";
const DEPLOYMENT = import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT || "gpt-4-mini";

// Pre-defined local knowledge base for offline/fallback mode
const LOCAL_KNOWLEDGE = {
  certifications: `Francis is a 10x Certified Azure Professional and Microsoft Certified Trainer (MCT). His core certifications include:
- Microsoft Certified: Azure Solutions Architect Expert (AZ-305)
- Microsoft Certified: DevOps Engineer Expert (AZ-400)
- Microsoft Certified: Azure Administrator Associate (AZ-104)
- Microsoft Certified: Azure Security Engineer Associate (AZ-500)
- Microsoft Certified: Azure Network Engineer Associate (AZ-700)
- AWS Certified: Cloud Practitioner (CLF-C01)
- Microsoft Certified Trainer (MCT)
- Microsoft Certified: Azure Fundamentals (AZ-900), Data Fundamentals (DP-900), and AI Fundamentals (AI-900).`,
  experience: `Francis has over 4 years of experience at Wipro (WILP / Woolworths Group):
1. **Senior Project Engineer (Dec 2025 - Present)**: Leads enterprise cloud operations, administers Microsoft Entra ID (Zero-Trust/RBAC/PIM), designs IaC via Terraform/Bicep, secures workloads with Defender for Cloud, and optimizes cloud spend (FinOps).
2. **Scholar Trainee (Nov 2021 - Nov 2025)**: Managed cloud operations, VM patching, backup/recovery, and incident management while completing his M.Tech.`,
  education: `Francis holds:
- **M.Tech in Computing Systems & Infrastructure** from BITS Pilani (completed through Wipro's Work Integrated Learning Program in 2025).
- **BCA** from KG College of Arts & Science, Bharathiar University (2021).`,
  projects: `Francis has built several high-impact personal and independent cloud/AI projects (these are separate from his official corporate work):
1. **CloudSentry**: A personal cloud security project evaluating subscription posture via OpenAI and Gemini.
2. **CruzOps-AI**: An independent scripting helper for generating Azure CLI & Terraform files.
3. **Azure Financial Insights**: A personal FinOps analytics dashboard with right-sizing recommendations.
4. **ATS Resume Analyzer**: A personal resume scanner using Azure Document Intelligence and Azure OpenAI.
5. **UniCompile**: An independent WASM client-side sandboxed online compiler.`,
  contact: `You can reach out to Francis via:
- **Email**: fcruz1301@icloud.com
- **LinkedIn**: linkedin.com/in/ajf013-francis-cruz/
- **GitHub**: github.com/ajf013
- **WhatsApp**: +91 6379649461`,
  default: `Hi! I'm CruzOps Copilot. I can tell you all about Francis's skills, certifications, work experience, and projects. 
Try asking me questions like:
- "What certifications does he have?"
- "Tell me about his FinOps/cost optimization project."
- "What is his work history?"
- "How can I contact Francis?"`
};

const SYSTEM_PROMPT = `You are CruzOps Copilot, a highly professional AI assistant representing Francis Cruz (MCT), a Senior Project Engineer, Azure Architect, and DevOps specialist.
Keep your answers brief, engaging, and friendly. Answer in the first person ("Francis has..." or "He did..."). Highlight his focus on automation, zero-trust cloud security, and FinOps (cost governance).
Context:
- Francis Ponnu Cruz I holds an M.Tech from BITS Pilani (2025) and works at Wipro / Woolworths Group.
- He has 10+ certifications including Azure Solutions Architect Expert, Azure DevOps Engineer Expert, Azure Security/Network Associate, and MCT.
- All portfolio projects listed (CloudSentry, CruzOps-AI, Azure Financial Insights, ATS Resume Analyzer, UniCompile, etc.) are his *personal and independent builds* developed to showcase his expertise. They are NOT official work projects created for Wipro or Woolworths.
- Contact details: Email: fcruz1301@icloud.com, WhatsApp: +91 6379649461, LinkedIn: linkedin.com/in/ajf013-francis-cruz/`;

const renderMessageText = (text) => {
  // Regex to match URLs
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|linkedin\.com\/in\/[^\s/]+(?:\/[^\s]*)?)/gi;
  // Regex to match Emails
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  // Regex to match WhatsApp phone patterns
  const phoneRegex = /(\+91\s?\d{10})/gi;

  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Format URLs
  html = html.replace(urlRegex, (url) => {
    let href = url;
    if (!url.match(/^https?:\/\//i)) {
      href = 'https://' + url;
    }
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="chat-link">${url}</a>`;
  });

  // Format Emails
  html = html.replace(emailRegex, (email) => {
    return `<a href="mailto:${email}" class="chat-link">${email}</a>`;
  });

  // Format Phone/WhatsApp
  html = html.replace(phoneRegex, (phone) => {
    const cleanPhone = phone.replace(/\s+/g, "");
    return `<a href="https://api.whatsapp.com/send?phone=${cleanPhone.replace("+", "")}" target="_blank" rel="noopener noreferrer" class="chat-link">${phone}</a>`;
  });

  return { __html: html };
};

const CopilotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I am Francis's AI assistant. Ask me anything about his credentials, cloud projects, or FinOps experience!"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { label: "📜 Certifications", query: "What Azure certifications do you have?" },
    { label: "💼 Work Experience", query: "Tell me about your experience at Wipro." },
    { label: "💰 FinOps Project", query: "Show me your Azure Financial Insights project." },
    { label: "📬 How to Connect", query: "How can I contact Francis?" }
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const getFallbackResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes("cert") || q.includes("badge") || q.includes("mct") || q.includes("credential")) {
      return LOCAL_KNOWLEDGE.certifications;
    }
    if (q.includes("work") || q.includes("experience") || q.includes("job") || q.includes("wipro") || q.includes("engineer")) {
      return LOCAL_KNOWLEDGE.experience;
    }
    if (q.includes("education") || q.includes("college") || q.includes("university") || q.includes("m.tech") || q.includes("pilani")) {
      return LOCAL_KNOWLEDGE.education;
    }
    if (q.includes("project") || q.includes("portfolio") || q.includes("cloudsentry") || q.includes("cruzops") || q.includes("ats")) {
      return LOCAL_KNOWLEDGE.projects;
    }
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("connect")) {
      return LOCAL_KNOWLEDGE.contact;
    }
    return "I can help you with that! Francis has expertise in Azure Cloud Governance, Bicep/Terraform automation, and SRE operations. Feel free to ask details about his certifications, M.Tech from BITS Pilani, or projects like CloudSentry!";
  };

  const handleSendMessage = async (textToSend) => {
    if (!textToSend.trim()) return;

    const userMessage = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");
    setIsTyping(true);

    try {
      const url = `${ENDPOINT.replace(/\/$/, "")}/openai/deployments/${DEPLOYMENT}/chat/completions?api-version=2024-02-15-preview`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": API_KEY
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text
            })),
            { role: "user", content: textToSend }
          ],
          max_tokens: 250,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error("Azure OpenAI response error");
      }

      const data = await response.json();
      const botResponse = data.choices[0].message.content;
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.warn("Azure OpenAI API failed. Using fallback client engine.", error);
      setTimeout(() => {
        const fallbackText = getFallbackResponse(textToSend);
        setMessages((prev) => [...prev, { sender: "bot", text: fallbackText }]);
      }, 800);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="copilot-container">
      {/* Floating Toggle Button */}
      <button 
        className={`copilot-toggle ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Copilot Chat"
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <div className="copilot-icon-wrapper">
            <i className="fas fa-robot copilot-pulse"></i>
            <span className="copilot-online-badge"></span>
          </div>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="copilot-chat-window">
          <div className="copilot-header">
            <div className="d-flex align-items-center">
              <div className="copilot-avatar">
                <i className="fas fa-terminal"></i>
              </div>
              <div>
                <h5 className="m-0 text-white font-weight-bold">CruzOps AI</h5>
                <span className="copilot-status">Online • Ask anything</span>
              </div>
            </div>
          </div>

          <div className="copilot-body">
            <div className="copilot-messages-area">
              {messages.map((m, index) => (
                <div key={index} className={`message-bubble-wrapper ${m.sender}`}>
                  <div className={`message-bubble ${m.sender}`}>
                    {m.text.split("\n").map((para, i) => (
                      <p 
                        key={i} 
                        className="m-0 mb-1" 
                        dangerouslySetInnerHTML={renderMessageText(para)}
                      />
                    ))}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message-bubble-wrapper bot">
                  <div className="message-bubble bot typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Cards */}
            <div className="copilot-quick-prompts">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  className="quick-prompt-card"
                  onClick={() => handleSendMessage(p.query)}
                  disabled={isTyping}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form input */}
          <form 
            className="copilot-footer" 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputVal);
            }}
          >
            <input
              type="text"
              className="copilot-input"
              placeholder="Ask me something..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" className="copilot-send-btn" disabled={!inputVal.trim() || isTyping}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CopilotWidget;
