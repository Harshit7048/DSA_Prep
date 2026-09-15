import { useState } from "react";
import Login from "./components/Login";
import users from "./Data/users";
import HomeFeed from "./components/HomeFeed";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const handleLogOut = function () {
    setCurrentUser("");
  };

  return (
    <>
      <div>
        {currentUser ? (
          <HomeFeed user={currentUser}></HomeFeed>
        ) : (
          <Login users={users} setCurrentUser={setCurrentUser} />
        )}

        {currentUser ? (
          <button onClick={() => handleLogOut()}>Log Out</button>
        ) : (
          "Login to start"
        )}
      </div>
    </>
  );
}

export default App;
