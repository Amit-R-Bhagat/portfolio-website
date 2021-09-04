import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <HeroContainer>
      <HiMessage>Hi, my name is</HiMessage>
      <h1>Amit Bhagat.</h1>
      <h2>I build things for the web.</h2>
      <p>
        I'm a CS undergrad specialized in full stack development.
        <br /> Currently I am building end to end projects.
      </p>
      <ActionMessage>
        <div>
          <a href="#email">Check out my projects!</a>
        </div>
      </ActionMessage>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  padding: 200px 0;
  h1,
  h2 {
    font-size: 60px;
    font-weight: 700;
    color: white;
  }

  h2 {
    opacity: 0.5;
  }

  p {
    margin: 20px 0;
    max-width: 540px;
  }
`;
const HiMessage = styled.div`
  font-family: "Share Tech Mono", monospace;
  font-size: 16px;
  color: var(--highlight);
  margin-bottom: 20px;
  margin-left: 2px;
`;
const ActionMessage = styled.div`
  margin: 40px 0;
  div {
    display: inline-block;
    border: 1px solid var(--highlight);
    padding: 6px 20px;
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
