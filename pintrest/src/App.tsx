import { useState } from "react";

import "./App.css";
import NavBar from "./component/Navbar";
import Masonry from "./component/Masonry";

function App() {
  const [mainData, setMainData] = useState({});
  return (
    <>
      <div style={styles.main}>
        <NavBar setData={setMainData} maindata={mainData}></NavBar>
        <Masonry data={mainData} />
      </div>
    </>
  );
}

const styles = {
  main: {
    padding: "0px",
    background: "none",
  },
};

export default App;
