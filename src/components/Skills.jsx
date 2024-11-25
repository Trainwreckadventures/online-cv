function Skills({ skills, onSkillClick }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <button key={index} onClick={() => onSkillClick(skill)}>
          {skill}
        </button>
      ))}
    </div>
  );
}

export default Skills;
