import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
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
            <strong>Francis Cruz (MCT) </strong>
          </span>
        </div>
        <div className="sub">

      <ReactTypingEffect
        text={["Cloud Administrator", "Web Developer", "Learner", "Freelancer"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%1 === 0 ? { color: 'WhiteSmoke'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}
      />
      </div>
      </div>
      </div>
        </MyTitleMessage>
    )
}

export default TitleMessage
