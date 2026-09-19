import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import AutoComp from "./component/AutoComp";
import { checkData } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AutoComp data={checkData} />
    </>
  );
}

export default App;
