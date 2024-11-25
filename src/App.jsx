import React from "react";
import "./App.css";
import Header from "./Header";
//import PersonalInfo from "./PersonalInfo";
//import SkillsButton from "./SkillsButton";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  const handleSkillClick = (skill) => {
    alert(`Du klikket på: ${skill}`);
  };

  const projects = [
    {
      title: "Project 1",
      description: "Beskrivelse av prosjekt 1",
      link: "http://example.com",
    },
    {
      title: "Project 2",
      description: "Beskrivelse av prosjekt 2",
      link: "http://example.com",
    },
  ];

  return (
    <div>
      <h1>Frog CV</h1>
      <Header />
      <Education school="Tadpole-academy" degree="Leap science" />
      <Skills
        skills={["Jumping", "Swimming", "Eating"]}
        onSkillClick={handleSkillClick}
      />
      <Projects projects={projects} />
      <Footer year={2024} />
    </div>
  );
}
export default App;
