import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Project from "./Project";
let projects;
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((body) => setProjects(body));
  }, []);

  return (
    <ProjectsContainer id="projects">
      <Headline>
        <h2>Projects</h2>
        <div></div>
      </Headline>
      <ProjectsContent>
        {projects
          ? projects.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                description={project.description}
                stack={project.stack}
                image={project.image}
                github={project.github}
                live={project.live}
              />
            ))
          : null}
      </ProjectsContent>
      <div></div>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  /* margin-bottom: 200px; */
`;

const Headline = styled.div`
  display: flex;
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

const ProjectsContent = styled.div``;
