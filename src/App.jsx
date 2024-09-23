import { General, GeneralRes } from "./components/general";
import "./styles/app.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <div className="container">
      <div className="formfields">
        <General
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          display={display}
          setDisplay={setDisplay}
        />
        <GeneralRes
          name={name}
          email={email}
          phone={phone}
          display={display}
          setDisplay={setDisplay}
        />
      </div>
    </div>
  );
}

export default App;
