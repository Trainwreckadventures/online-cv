import "./App.css";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import SkillsButton from "./SkillsButton";

function App() {
  return (
    <div>
      <Header />
      <PersonalInfo
        navn="[Ditt Navn]"
        adresse="[Din Adresse]"
        telefonnummer="[Ditt Telefonnummer]"
        epost="[Din E-post]"
      />
      <SkillsButton />
    </div>
  );
}
export default App;
