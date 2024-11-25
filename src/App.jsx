import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
//import PersonalInfo from "./PersonalInfo";
//import SkillsButton from "./SkillsButton";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  const [skills, setSkills] = useState(["leap", "eat", "chill"]);

  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const projects = [
    {
      title: "Project 1",
      description: "Project 1 description",
      link: "http://example.com",
    },
    {
      title: "Project 2",
      description: "Project 2 description",
      link: "http://example.com",
    },
  ];

  return (
    <div>
      <h1>Frog CV</h1>
      <Header />
      <Education school="Tadpole-academy" degree="Leap science" />
      <Skills skills={skills} onDeleteSkill={handleDeleteSkill} />
      <Projects projects={projects} />
      <Footer year={2024} />
    </div>
  );
}
export default App;
