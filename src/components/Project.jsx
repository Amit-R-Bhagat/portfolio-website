import React from "react";
import styled from "styled-components";

function Project({ name, description, stack, image, github, live }) {
  // console.log(image);
  return (
    <ProjectContainer>
      <img src={image} alt="" />
      <ProjectContent>
        <h2>{name}</h2>
        <p>{description}</p>
        <ul>
          {stack
            ? stack.map((tool, index) => <li key={index}>{tool}</li>)
            : null}
        </ul>
        <div>
          <a href={github}>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="20px"
              height="20px"
            >
              {" "}
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
          <a href={live}>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="20px"
              height="20px"
            >
              <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
            </svg>
          </a>
        </div>
      </ProjectContent>
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.div`
  position: relative;
  margin: 100px 0;
  > img {
    height: 300px;
    width: 450px;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 412px) {
    img {
      position: relative;
    }
  }
`;

const ProjectContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  align-items: flex-end;
  margin-left: auto;

  > ul {
    font-size: 13px;
    display: flex;
    list-style-type: none;
  }

  > ul > li {
    padding: 12px;
    color: var(--highlight);
  }

  h2 {
    color: var(--highlight);
  }

  h2,
  p,
  ul {
    margin: 20px 0;
  }

  p {
    text-align: right;
    padding: 5px 10px;
    background-color: rgba(9, 45, 66, 0.9);
  }

  div {
    display: flex;
  }

  div > a {
    margin-left: 20px;
  }

  @media (max-width: 412px) {
    align-items: center;
    width: 100%;
    ul {
      padding: auto 0;
    }
  }
`;
