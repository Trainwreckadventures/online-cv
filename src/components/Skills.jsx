function Skills({ skills, onDeleteSkill }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index}>
          <span>{skill}</span>
          <button onClick={() => onDeleteSkill(index)}>Slett</button>
        </div>
      ))}
    </div>
  );
}
export default Skills;
