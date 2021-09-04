import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer id="contact">
      <HiMessage>
        <div>Hi, my name is</div>
      </HiMessage>
      <h2>Get In Touch</h2>
      <ActionMessage>
        <div>
          <a href="#email">Say Hello!</a>
        </div>
      </ActionMessage>
    </ContactContainer>
  );
}

export default Contact;
const ContactContainer = styled.div`
  margin-top: 300px;
  text-align: center;
  margin-bottom: 100px;
  h2 {
    font-size: 50px;
    color: white;
  }
`;

const HiMessage = styled.div`
  div {
    font-family: "Share Tech Mono", monospace;
    font-size: 16px;
    color: var(--highlight);
    margin-bottom: 20px;
    margin-left: 2px;
  }
  div::before {
    counter-increment: section 4;
    content: "0" counter(section) ".";
  }
`;

const ActionMessage = styled.div`
  margin: 40px 0;
  div {
    display: inline-block;
    border: 1px solid var(--highlight);
    padding: 10px 20px;
    border-radius: 3px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  div:hover {
    background-color: rgba(244, 233, 205, 0.18);
  }
`;
