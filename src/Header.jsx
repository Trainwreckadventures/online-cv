import froooosk from "./assets/froooosk.png";

function Header() {
  return (
    <div>
      <h1>Min Online CV</h1>
      <img
        src={froooosk}
        alt="froooosk"
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}

export default Header;
