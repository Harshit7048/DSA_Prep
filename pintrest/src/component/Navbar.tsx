import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import ProfileLook from "./ProfileLook";

export default function NavBar({ setData, maindata }) {
  const [searchVal, setSearchVal] = useState("");
  const { user } = useUser();

  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const handleSearch = async () => {
    console.log(searchVal);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          searchVal,
        )}&client_id=${ACCESS_KEY}&per_page=30`,
      );

      const data = await response.json();

      setData(data.results);
      console.log(maindata);
      // console.log(data);
      setSearchVal("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={styles.nav} className='navbar'>
      <div>Logo</div>
      <div style={styles.inputArea}>
        <input
          type='text'
          placeholder='Search'
          style={styles.input}
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
        />
        <button style={styles.button} onClick={() => handleSearch()}>
          Search
        </button>
      </div>
      <div>
        {user ? <ProfileLook user={user} /> : <Link to='/login'>Login</Link>}
      </div>
    </div>
  );
}
// stQVc1eLgeFOILI7bzf0sQntubt7E6MNJBwQtoQk50AnPz8wnj2tFOeL

// w2p2TNXQb0lxGh_IwcjsCHsjtQ6Pt8k2hSBCY3Lj1gk

const styles = {
  nav: {
    display: "flex",
    padding: "10px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputArea: {
    background: "white",
    width: "50%",
    padding: "5px",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    background: "none",
    border: "1px solid grey",
    height: "40px",
    width: "70%",
    borderRadius: "20px",
    paddingLeft: "5px",
  },

  button: {
    width: "25%",
    height: "40px",
    borderRadius: "20px",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer",
  },
};
