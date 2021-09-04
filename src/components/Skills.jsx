import React, { useRef } from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
function Skills() {
  const skills = useRef(null);

  function scroll(direction) {
    if (skills) {
      const obj = {
        top: 0,
        left: 500,
        behaviour: "smooth",
      };
      if (direction === "right") {
        obj["left"] = -500;
      }
      skills.current.scrollBy(obj);
    }
  }

  return (
    <SkillsContainer>
      <KeyboardArrowLeftIcon
        onClick={() => {
          scroll("right");
        }}
      />
      <div className="skills" ref={skills}>
        <div>
          <img src="/img/html.png" alt="" />
          <h2>HTML</h2>
        </div>
        <div>
          <img src="/img/css.png" alt="" />
          <h2>CSS</h2>
        </div>
        <div>
          <img src="/img/js.png" alt="" />
          <h2>JS</h2>
        </div>
        <div>
          <img src="/img/react.png" alt="" />
          <h2>React</h2>
        </div>
        <div>
          <img src="/img/redux.png" alt="" />
          <h2>Redux</h2>
        </div>
        <div>
          <img src="/img/node.png" alt="" />
          <h2>NodeJs</h2>
        </div>
        <div>
          <img src="/img/postgres.png" alt="" />
          <h2>Postgresql</h2>
        </div>
      </div>
      <KeyboardArrowRightIcon
        onClick={() => {
          scroll("left");
        }}
      />
    </SkillsContainer>
  );
}

export default Skills;

const SkillsContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  margin-bottom: 200px;
  > .skills {
    display: flex;
    overflow-x: hidden;
    position: relative;
  }

  .options > .MuiSvgIcon-root {
    position: absolute;
    top: 80px;
    z-index: 10;
  }

  > .skills > div {
    height: 200px;
    min-width: 210px;
    display: flex;
    flex-direction: column;
  }

  > .skills > div > img {
    /* background-color: yellow; */
    /* border: 1px solid black; */
    margin: auto;
    width: 155px;
    height: 150px;
  }

  > .skills > div > h2 {
    padding-top: 20px;
    text-align: center;
  }
`;
