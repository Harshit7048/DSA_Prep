import { useState } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";

function App() {
  const [mainData, setMainData] = useState({});
  return (
    <>
      {/* <div style={styles.main}>
        <NavBar setData={setMainData} maindata={mainData}></NavBar>
        <Masonry data={mainData} />
      </div> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
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
