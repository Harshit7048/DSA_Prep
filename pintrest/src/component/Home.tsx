import { useState } from "react";

import NavBar from "./Navbar";
import Masonry from "./Masonry";
export default function Home() {
  const [mainData, setMainData] = useState({});
  return (
    <div style={styles.main}>
      <NavBar setData={setMainData} maindata={mainData}></NavBar>
      <Masonry data={mainData} />
    </div>
  );
}
const styles = {
  main: {
    padding: "0px",
    background: "none",
  },
};
