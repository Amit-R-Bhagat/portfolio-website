import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutContainer id="about">
      <Headline>
        <h2>About Me</h2>
        <div></div>
      </Headline>
      <AboutContent>
        <AboutText>
          <p>
            Hello! My name is Amit and I love exploring the tech side of things
            around me. My interest in web development started back in First year
            of my college. I really love making backend applications.
          </p>
          <br />
          <p>
            The most part of building things is working in teams. Teams have
            great power to build awesome project. This is why I regularly
            participate in hackathons with my Dheet-Developers Team.
          </p>
        </AboutText>
        <AboutImage>
          <div>
            <img src="/img/profile_pic.jpg" alt="" />
          </div>
        </AboutImage>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;

// const AboutContainer = styled.div`
//   display: flex;
//   margin: auto;
//   /* min-width: 90%; */
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   margin-bottom: 100px;
// `;

// const Headline = styled.div`
//   display: flex;
//   flex: 0.9;
//   margin: 5px 0 50px;
//   h2 {
//     color: white;
//     font-size: 26px;
//   }
//   > h2::before {
//     counter-increment: section 1;
//     content: "0" counter(section) ".";
//     margin-right: 10px;
//     color: var(--highlight);
//   }

//   div {
//     width: 320px;
//     position: relative;
//     height: 0px;
//     margin-left: 10px;
//     top: 16px;
//     border: 0.5px solid white;
//     opacity: 0.2;
//   }
// `;
// const AboutContent = styled.div`
//   /* display: flex; */
//   /* margin-right: 50px; */
//   line-height: 1.5;
//   flex: 0.1;
// `;
// const AboutText = styled.div``;
// const AboutImage = styled.div`
//   flex: 0.4;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   top: 40px;
//   margin-left: 10px;
//   img {
//     height: 200px;
//     width: 250px;
//     border-radius: 3px;
//     position: relative;
//     background: transparent;
//     box-shadow: 0 0 4px var(--highlight);
//   }
//   div {
//     position: absolute;
//     width: 250px;
//     height: 200px;
//     top: 15px;
//     left: 20px;
//     border: 2px solid var(--highlight);
//     border-radius: 3px;
//     box-shadow: inset 0 0 5px var(--highlight);
//     z-index: -2;
//   }
// `;

const AboutContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 200px;
`;

const Headline = styled.div`
  display: flex;
  margin-bottom: 50px;
  h2 {
    color: white;
    font-size: 26px;
  }
  > h2::before {
    counter-increment: section 2;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--highlight);
  }

  div {
    width: 320px;
    position: relative;
    height: 0px;
    margin-left: 10px;
    top: 16px;
    border: 0.5px solid white;
    opacity: 0.2;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.5;
`;

const AboutText = styled.div`
  flex: 0.7;
`;

const AboutImage = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  margin-left: 10px;
  img {
    height: 200px;
    width: 250px;
    border-radius: 3px;
    background: transparent;
    box-shadow: 0 0 8px var(--highlight);
  }
  div {
    position: relative;
  }

  div::after {
    content: "";
    display: block;
    position: absolute;
    width: 250px;
    height: 200px;
    top: 15px;
    left: 15px;
    border: 2px solid var(--highlight);
    border-radius: 3px;
    box-shadow: inset 0 0 8px var(--highlight);
    z-index: -1;
  }
`;
