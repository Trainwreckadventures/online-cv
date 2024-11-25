function SkillsButton() {
  const visDetaljer = () => {
    alert("ferdigheter: Frog, Sleep, Swim, Vibes");
  };
  return <button onClick={visDetaljer}>Vis Detaljer</button>;
}

export default SkillsButton;
