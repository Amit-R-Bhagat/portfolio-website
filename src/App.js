import React from "react";
import "./App.css";
import styled from "styled-components";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </AppBody>
      <Footer />
    </div>
  );
}

export default App;

const AppBody = styled.div`
  width: 52%;
  margin: auto;
  padding-top: 80px;
  font-family: "Karla", sans-serif;
  color: var(--secondary);
  overflow-x: hidden;

  @media (max-width: 412px) {
    width: 95%;
  }
`;
