import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./FinOpsSimulator.css";
import { initializeMsal, msalInstance, loginRequest } from "../../utils/azureAuth";

const BASE_COSTS = {
  vms: 292, // 2x D4s v5 VMs
  sql: 380, // Gen 5 4-vCore Azure SQL DB
  blob: 100 // 5TB Hot Blob Storage
};

const CURRENCIES = [
  { code: "USD", symbol: "$", rate: 1, label: "USD ($)" },
  { code: "EUR", symbol: "€", rate: 0.92, label: "EUR (€)" },
  { code: "GBP", symbol: "£", rate: 0.78, label: "GBP (£)" },
  { code: "AUD", symbol: "A$", rate: 1.50, label: "AUD (A$)" },
  { code: "INR", symbol: "₹", rate: 83.5, label: "INR (₹)" },
  { code: "CAD", symbol: "C$", rate: 1.36, label: "CAD (C$)" },
  { code: "JPY", symbol: "¥", rate: 160.0, label: "JPY (¥)" },
  { code: "SGD", symbol: "S$", rate: 1.35, label: "SGD (S$)" },
  { code: "CNY", symbol: "¥", rate: 7.27, label: "CNY (¥)" }
];

const FinOpsSimulator = () => {
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [account, setAccount] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSub, setSelectedSub] = useState("");
  const [loadingState, setLoadingState] = useState(""); // "", "authenticating", "subscriptions", "scanning", "done"
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [recommendations, setRecommendations] = useState([]);
  const [scannedSummary, setScannedSummary] = useState(null);

  const [toggles, setToggles] = useState({
    vmRI: false,
    vmAutoShutdown: false,
    sqlServerless: false,
    blobLifecycle: false
  });

  useEffect(() => {
    Aos.init({ duration: 1500 });
    
    // Auto-check for existing signed-in accounts
    initializeMsal().then((instance) => {
      const activeAccounts = instance.getAllAccounts();
      if (activeAccounts.length > 0) {
        setAccount(activeAccounts[0]);
        fetchSubscriptions(activeAccounts[0]);
      }
    }).catch(err => console.error("MSAL init error:", err));
  }, []);

  const handleLogin = async () => {
    try {
      setLoadingState("authenticating");
      const instance = await initializeMsal();
      await instance.loginRedirect(loginRequest);
    } catch (err) {
      console.error("Login failed:", err);
      setLoadingState("");
    }
  };

  const handleLogout = async () => {
    try {
      const instance = await initializeMsal();
      await instance.logoutRedirect({
        account: account,
        postLogoutRedirectUri: window.location.origin
      });
      setAccount(null);
      setSubscriptions([]);
      setSelectedSub("");
      setRecommendations([]);
      setScannedSummary(null);
      setLoadingState("");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const fetchSubscriptions = async (currentAccount) => {
    try {
      setLoadingState("subscriptions");
      const instance = await initializeMsal();
      const tokenResponse = await instance.acquireTokenSilent({
        scopes: ["https://management.azure.com/user_impersonation"],
        account: currentAccount
      });
      
      const response = await fetch("https://management.azure.com/subscriptions?api-version=2020-01-01", {
        headers: {
          Authorization: `Bearer ${tokenResponse.accessToken}`
        }
      });
      const data = await response.json();
      if (data.value) {
        setSubscriptions(data.value);
        if (data.value.length > 0) {
          setSelectedSub(data.value[0].subscriptionId);
        }
      }
      setLoadingState("");
    } catch (err) {
      console.error("Error fetching subscriptions:", err);
      setLoadingState("");
    }
  };

  const handleScanSubscription = async () => {
    if (!selectedSub) return;
    try {
      setLoadingState("scanning");
      setLoadingProgress(15);
      
      const instance = await initializeMsal();
      const tokenResponse = await instance.acquireTokenSilent({
        scopes: ["https://management.azure.com/user_impersonation"],
        account
      });
      
      setLoadingProgress(45);
      // Fetch cost-related recommendations from Azure Advisor
      const response = await fetch(
        `https://management.azure.com/subscriptions/${selectedSub}/providers/Microsoft.Advisor/recommendations?api-version=2023-01-01&$filter=Category eq 'Cost'`,
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.accessToken}`
          }
        }
      );
      
      setLoadingProgress(75);
      const data = await response.json();
      const recs = data.value || [];
      setRecommendations(recs);
      
      // Calculate real total potential savings from recommendations
      let totalAdvisorSavings = 0;
      let vmAdvisorSavings = 0;
      let sqlAdvisorSavings = 0;
      let storageAdvisorSavings = 0;

      recs.forEach(rec => {
        const impact = parseFloat(rec.properties?.impactAmount) || 0;
        totalAdvisorSavings += impact;

        const description = (rec.properties?.shortDescription?.problem || "").toLowerCase();
        if (description.includes("virtual machine") || description.includes("vm")) {
          vmAdvisorSavings += impact;
        } else if (description.includes("sql") || description.includes("database")) {
          sqlAdvisorSavings += impact;
        } else if (description.includes("storage") || description.includes("blob")) {
          storageAdvisorSavings += impact;
        }
      });

      setScannedSummary({
        totalSavings: totalAdvisorSavings,
        vmSavings: vmAdvisorSavings,
        sqlSavings: sqlAdvisorSavings,
        storageSavings: storageAdvisorSavings,
        count: recs.length
      });

      setLoadingProgress(100);
      setTimeout(() => {
        setLoadingState("done");
      }, 500);
    } catch (err) {
      console.error("Error scanning subscription:", err);
      setLoadingState("");
    }
  };

  const handleToggle = (key) => {
    setToggles(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate costs based on active optimizations
  const calculateCosts = () => {
    let vmCost = BASE_COSTS.vms;
    let sqlCost = BASE_COSTS.sql;
    let blobCost = BASE_COSTS.blob;

    // Apply VM Reserved Instance (40% off compute)
    if (toggles.vmRI) {
      vmCost = vmCost * 0.6;
    }

    // Apply Auto-shutdown (saves 30% of remaining compute)
    if (toggles.vmAutoShutdown) {
      vmCost = vmCost * 0.7;
    }

    // Apply SQL Database Serverless (saves 60%)
    if (toggles.sqlServerless) {
      sqlCost = sqlCost * 0.4;
    }

    // Apply Blob Storage Lifecycle Policy (saves 70%)
    if (toggles.blobLifecycle) {
      blobCost = blobCost * 0.3;
    }

    const baseline = BASE_COSTS.vms + BASE_COSTS.sql + BASE_COSTS.blob;
    const optimized = vmCost + sqlCost + blobCost;
    const savings = baseline - optimized;
    const pctSavings = (savings / baseline) * 100;

    const rate = currency.rate;

    return {
      baseline: Math.round(baseline * rate),
      optimized: Math.round(optimized * rate),
      savings: Math.round(savings * rate),
      pctSavings: Math.round(pctSavings),
      vmSavings: Math.round((BASE_COSTS.vms - vmCost) * rate),
      sqlSavings: Math.round((BASE_COSTS.sql - sqlCost) * rate),
      blobSavings: Math.round((BASE_COSTS.blob - blobCost) * rate)
    };
  };

  const cost = calculateCosts();

  return (
    <div id="finops-simulator" className="py-5 finops-section">
      <h1 data-aos="zoom-in" className="text-center font-details-b pb-5">
        FINOPS COST SIMULATOR
      </h1>
      
      <div className="container" data-aos="fade-up">
        {/* Entra ID Authentication Banner */}
        <div className="azure-connection-card finops-card mb-4 p-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div className="d-flex align-items-center">
            <div className="azure-logo mr-3">
              <i className="fab fa-microsoft text-info font-size-lg"></i>
            </div>
            <div>
              <h5 className="m-0 text-white font-weight-bold">
                {account ? `Connected as ${account.username}` : "Connect Live Azure Subscription"}
              </h5>
              <p className="m-0 text-white-50 small">
                {account 
                  ? "Select a subscription to scan live resources and extract Azure Advisor cost savings recommendations."
                  : "Sign in with your Microsoft Work, School, or Personal account to test with actual Azure resources."
                }
              </p>
            </div>
          </div>
          <div className="azure-auth-controls d-flex align-items-center gap-2 flex-wrap">
            {account ? (
              <>
                {loadingState === "subscriptions" ? (
                  <span className="text-white-50 mr-2 small"><i className="fas fa-spinner fa-spin mr-1"></i> Loading subscriptions...</span>
                ) : (
                  subscriptions.length > 0 && (
                    <select
                      value={selectedSub}
                      onChange={(e) => setSelectedSub(e.target.value)}
                      className="currency-dropdown subscription-dropdown mr-2"
                      aria-label="Select Azure subscription"
                    >
                      {subscriptions.map((sub) => (
                        <option key={sub.subscriptionId} value={sub.subscriptionId}>
                          {sub.displayName}
                        </option>
                      ))}
                    </select>
                  )
                )}
                <button 
                  onClick={handleScanSubscription} 
                  disabled={loadingState === "scanning" || !selectedSub} 
                  className="btn btn-success px-4 py-2 mr-2 btn-neon-green"
                >
                  <i className="fas fa-search mr-2"></i> Scan Resources
                </button>
                <button onClick={handleLogout} className="btn btn-outline-danger px-3 py-2">
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </>
            ) : (
              <button 
                onClick={handleLogin} 
                disabled={loadingState === "authenticating"} 
                className="btn btn-primary px-4 py-2 btn-neon-blue"
              >
                <i className="fab fa-microsoft mr-2"></i> {loadingState === "authenticating" ? "Connecting..." : "Connect Azure Tenant"}
              </button>
            )}
          </div>
        </div>

        {/* Live Scanning Progress */}
        {loadingState === "scanning" && (
          <div className="finops-card mb-4 p-4 text-center">
            <h5 className="text-white mb-3">Scanning Subscription Resources...</h5>
            <div className="cost-bar-track progress-bar-large mx-auto mb-2" style={{ maxWidth: "450px" }}>
              <div className="cost-bar fill-optimized" style={{ width: `${loadingProgress}%` }}></div>
            </div>
            <small className="text-white-50">
              {loadingProgress < 40 ? "Querying subscription info..." : loadingProgress < 80 ? "Analysing Azure Advisor cost alerts..." : "Compiling FinOps recommendations..."}
            </small>
          </div>
        )}

        {/* Scan Result Banner */}
        {loadingState === "done" && scannedSummary && (
          <div className="finops-card alert-card-success mb-4 p-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h5 className="m-0 text-success font-weight-bold">
                <i className="fas fa-check-circle mr-2"></i> Scan Completed!
              </h5>
              <p className="m-0 text-white-50 small mt-1">
                We retrieved <strong>{scannedSummary.count}</strong> cost recommendations from Azure Advisor on this subscription, offering up to <strong>{currency.symbol}{Math.round(scannedSummary.totalSavings * currency.rate)}/mo</strong> in potential savings.
              </p>
            </div>
            <button onClick={() => setLoadingState("")} className="btn btn-sm btn-outline-secondary px-3 py-1">Dismiss</button>
          </div>
        )}

        <div className="row g-4 align-items-stretch">
          {/* Workload Config & Toggles */}
          <div className="col-12 col-lg-7">
            <div className="finops-card height-100">
              <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h3 className="card-title-neon m-0">
                  <i className="fas fa-sliders-h mr-2"></i> Optimization Controls
                </h3>
                <div className="currency-selector-container">
                  <select 
                    value={currency.code} 
                    onChange={(e) => {
                      const cur = CURRENCIES.find(c => c.code === e.target.value);
                      setCurrency(cur);
                    }}
                    className="currency-dropdown"
                    aria-label="Select currency"
                  >
                    {CURRENCIES.map(cur => (
                      <option key={cur.code} value={cur.code}>{cur.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="workload-list">
                {/* Workload 1 */}
                <div className="workload-item">
                  <div className="workload-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="workload-icon bg-vm">
                        <i className="fas fa-server"></i>
                      </div>
                      <div>
                        <h5 className="m-0 text-white">Compute Workloads</h5>
                        <small className="text-white-50">
                          2x Azure D4s v5 VMs (Baseline: {currency.symbol}{Math.round(BASE_COSTS.vms * currency.rate)}/mo)
                        </small>
                      </div>
                    </div>
                    {scannedSummary && scannedSummary.vmSavings > 0 && (
                      <span className="badge bg-warning text-dark"><i className="fas fa-exclamation-triangle mr-1"></i> Advisor Alert</span>
                    )}
                  </div>
                  <div className="toggles-group mt-3 pl-5">
                    <label className="toggle-switch-wrapper d-flex align-items-center mb-2">
                      <input 
                        type="checkbox" 
                        checked={toggles.vmRI}
                        onChange={() => handleToggle("vmRI")} 
                      />
                      <span className="toggle-label text-white">
                        Apply 3-Year Reserved Instances <strong className="text-success">(Save 40%)</strong>
                      </span>
                    </label>
                    <label className="toggle-switch-wrapper d-flex align-items-center">
                      <input 
                        type="checkbox" 
                        checked={toggles.vmAutoShutdown}
                        onChange={() => handleToggle("vmAutoShutdown")} 
                      />
                      <span className="toggle-label text-white">
                        Configure Auto-Shutdown (12hr/day off-hours) <strong className="text-success">(Save 30%)</strong>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Workload 2 */}
                <div className="workload-item mt-4">
                  <div className="workload-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="workload-icon bg-db">
                        <i className="fas fa-database"></i>
                      </div>
                      <div>
                        <h5 className="m-0 text-white">Database Tier</h5>
                        <small className="text-white-50">
                          Azure SQL Database GP Gen 5 4-vCore (Baseline: {currency.symbol}{Math.round(BASE_COSTS.sql * currency.rate)}/mo)
                        </small>
                      </div>
                    </div>
                    {scannedSummary && scannedSummary.sqlSavings > 0 && (
                      <span className="badge bg-warning text-dark"><i className="fas fa-exclamation-triangle mr-1"></i> Advisor Alert</span>
                    )}
                  </div>
                  <div className="toggles-group mt-3 pl-5">
                    <label className="toggle-switch-wrapper d-flex align-items-center">
                      <input 
                        type="checkbox" 
                        checked={toggles.sqlServerless}
                        onChange={() => handleToggle("sqlServerless")} 
                      />
                      <span className="toggle-label text-white">
                        Convert to Serverless auto-pause tier <strong className="text-success">(Save 60%)</strong>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Workload 3 */}
                <div className="workload-item mt-4">
                  <div className="workload-header d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="workload-icon bg-storage">
                        <i className="fas fa-hdd"></i>
                      </div>
                      <div>
                        <h5 className="m-0 text-white">Storage Accounts</h5>
                        <small className="text-white-50">
                          5 TB Blob Storage Hot Tier (Baseline: {currency.symbol}{Math.round(BASE_COSTS.blob * currency.rate)}/mo)
                        </small>
                      </div>
                    </div>
                    {scannedSummary && scannedSummary.storageSavings > 0 && (
                      <span className="badge bg-warning text-dark"><i className="fas fa-exclamation-triangle mr-1"></i> Advisor Alert</span>
                    )}
                  </div>
                  <div className="toggles-group mt-3 pl-5">
                    <label className="toggle-switch-wrapper d-flex align-items-center">
                      <input 
                        type="checkbox" 
                        checked={toggles.blobLifecycle}
                        onChange={() => handleToggle("blobLifecycle")} 
                      />
                      <span className="toggle-label text-white">
                        Configure Storage Lifecycle Archiving Policy <strong className="text-success">(Save 70%)</strong>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Dashboard */}
          <div className="col-12 col-lg-5">
            <div className="finops-card results-card height-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="card-title-neon mb-4">
                  <i className="fas fa-chart-pie mr-2"></i> FinOps Dashboard
                </h3>
                
                {/* Cost Comparison Bars */}
                <div className="cost-comparison mt-4">
                  <div className="cost-bar-wrapper mb-3">
                    <div className="d-flex justify-content-between text-white-50 mb-1">
                      <span>Baseline Cost</span>
                      <strong className="text-danger">{currency.symbol}{cost.baseline}/mo</strong>
                    </div>
                    <div className="cost-bar-track">
                      <div className="cost-bar fill-baseline" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="cost-bar-wrapper mb-4">
                    <div className="d-flex justify-content-between text-white-50 mb-1">
                      <span>Optimized Cost</span>
                      <strong className="text-success">{currency.symbol}{cost.optimized}/mo</strong>
                    </div>
                    <div className="cost-bar-track">
                      <div 
                        className="cost-bar fill-optimized" 
                        style={{ width: `${(cost.optimized / cost.baseline) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Big Savings Metric */}
                <div className="savings-display text-center my-4 py-3">
                  <h4 className="m-0 text-white-50">Monthly Savings</h4>
                  <div className="savings-amount">{currency.symbol}{cost.savings}</div>
                  <span className="savings-percentage">Saved {cost.pctSavings}%</span>
                </div>
              </div>

              {/* Informational Blurb */}
              <div className="finops-insight mt-3">
                <i className="fas fa-lightbulb insight-icon text-warning mr-2"></i>
                <span className="text-white-50">
                  {cost.pctSavings > 0 ? (
                    `By applying these rules, you reduced the infrastructure cost by ${cost.pctSavings}%. Francis integrates these exact automated practices into production pipelines to reduce operational waste.`
                  ) : (
                    "Select any optimization controls above to see the simulated savings."
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Advisor Recommendations List (only visible if loaded from Azure Advisor) */}
        {recommendations.length > 0 && (
          <div className="row mt-4" data-aos="fade-up">
            <div className="col-12">
              <div className="finops-card border-warning-dim">
                <h4 className="card-title-neon mb-3 text-warning">
                  <i className="fas fa-shield-alt mr-2"></i> Scanned Azure Advisor Cost Recommendations
                </h4>
                <p className="text-white-50 small mb-4">
                  The following optimization recommendations were fetched live from your selected Azure subscription via the Microsoft Advisor API:
                </p>
                <div className="advisor-recs-grid row g-3">
                  {recommendations.map((rec, i) => (
                    <div key={i} className="col-12 col-md-6">
                      <div className="advisor-rec-item p-3 rounded">
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <div>
                            <span className="text-white font-weight-bold d-block">{rec.properties?.shortDescription?.problem || "Cost Optimisation Recommended"}</span>
                            <small className="text-white-50 mt-1 d-block font-size-xs">
                              Resource: <code>{rec.properties?.resourceMetadata?.resourceId?.split("/").pop() || "Global"}</code>
                            </small>
                          </div>
                          <span className="text-success font-weight-bold text-nowrap">
                            -{currency.symbol}{Math.round((parseFloat(rec.properties?.impactAmount) || 0) * currency.rate)}/mo
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* How it Calculates Section */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <div className="finops-card calc-info-card">
              <h3 className="card-title-neon mb-4">
                <i className="fas fa-info-circle mr-2"></i> How Does This Calculator Work?
              </h3>
              <p className="text-white-50">
                This simulator showcases standard industry optimization formulas used by FinOps teams to reduce enterprise cloud waste. The savings are calculated using the following formulas:
              </p>
              
              <div className="row g-4 mt-2">
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="formula-box">
                    <h5 className="text-white"><i className="fas fa-server text-info mr-2"></i> VM Reserved Instances (RI)</h5>
                    <p className="text-white-50 mb-0">
                      Commitment-based savings where cloud providers offer a flat <strong>40% discount</strong> in exchange for a 3-year usage agreement.
                    </p>
                    <div className="formula-tag mt-3">Formula: Cost × 0.60</div>
                  </div>
                </div>
                
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="formula-box">
                    <h5 className="text-white"><i className="fas fa-power-off text-info mr-2"></i> VM Auto-Shutdown</h5>
                    <p className="text-white-50 mb-0">
                      Scheduling VMs to shut down during off-hours (e.g., 12 hours/day for non-production environments) saves <strong>30%</strong> of remaining compute hours.
                    </p>
                    <div className="formula-tag mt-3">Formula: Cost × 0.70</div>
                  </div>
                </div>
                
                <div className="col-12 col-md-6 col-xl-3">
                  <div className="formula-box">
                    <h5 className="text-white"><i className="fas fa-bolt text-info mr-2"></i> Serverless DB Auto-Pause</h5>
                    <p className="text-white-50 mb-0">
                      Converting databases to a Serverless model with auto-pause capabilities saves an average of <strong>60%</strong> by scaling down to zero compute during idle times.
                    </p>
                    <div className="formula-tag mt-3">Formula: Cost × 0.40</div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-xl-3">
                  <div className="formula-box">
                    <h5 className="text-white"><i className="fas fa-archive text-info mr-2"></i> Storage Archiving Policy</h5>
                    <p className="text-white-50 mb-0">
                      Moving infrequently accessed data from Hot tier storage to Cool/Archive tiers saves <strong>70%</strong> on storage capacity rates.
                    </p>
                    <div className="formula-tag mt-3">Formula: Cost × 0.30</div>
                  </div>
                </div>

                <div className="col-12 col-md-4 mt-xl-4">
                  <div className="formula-box">
                    <h5 className="text-white"><i className="fas fa-chart-line text-success mr-2"></i> Compounding Optimizations</h5>
                    <p className="text-white-50 mb-0">
                      When multiple VM optimizations are applied, they compound sequentially. The 40% RI discount is applied first, then the remaining cost is reduced by 30% via scheduling.
                    </p>
                    <div className="formula-tag mt-3">VM Equation: Base × 0.60 × 0.70 = 58% Savings</div>
                  </div>
                </div>

                <div className="col-12 col-md-8 mt-xl-4">
                  <div className="formula-box d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="text-white"><i className="fas fa-percentage text-success mr-2"></i> Combined Total Cost Equation</h5>
                      <p className="text-white-50 mb-0">
                        The overall savings represent the difference between the baseline configuration cost and the optimized tier costs, summed across all resource categories (Compute, Database, Storage).
                      </p>
                    </div>
                    <div className="formula-tag mt-3">Total Cost = (Optimized VM Cost) + (Optimized SQL Cost) + (Optimized Storage Cost)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinOpsSimulator;
