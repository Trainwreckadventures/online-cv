import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const addNewSkill = () => {
    if (skill.trim() !== "") {
      setSkill([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <div>
      <h1>Min Online CV</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>

      <h2>Skills</h2>

      <input
        type="text"
        placeholder="New skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={addNewSkill}>Add New Skill</button>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
