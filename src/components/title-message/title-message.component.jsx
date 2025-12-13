import React from "react";
import ReactTypingEffect from "react-typing-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  padding: 0 1rem;

  strong {
    font-size: 1.25em;
  }

  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 5px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 30px;
      letter-spacing: 2px;
    }
  }

  /* --------------------
     Mobile Responsive Fix
  -------------------- */
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    margin-top: 0;
    padding: 1rem;

    div {
      letter-spacing: 2px;

      .main {
        font-size: 28px;
        line-height: 1.3;
      }

      .sub {
        font-size: 18px;
        line-height: 1.3;
      }
    }
  }
`;

const TitleMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Francis Cruz (MCT)</strong>
            </span>
          </div>

          <div className="sub">
            <ReactTypingEffect
              text={[
                "Azure Administrator",
                "DevOps Practitioner",
                "Cloud Platform Learner",
              ]}
              cursorRenderer={(cursor) => <span>{cursor}</span>}
              displayTextRenderer={(text) => (
                <span>
                  {text.split("").map((char, i) => (
                    <span
                      key={i}
                      style={{ color: "WhiteSmoke" }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              )}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default TitleMessage;
