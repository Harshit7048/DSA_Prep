import { useState } from "react";
import Login from "./components/Login";
import users from "./Data/users";
import HomeFeed from "./components/HomeFeed";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <>
      <div>
        {currentUser ? (
          <HomeFeed user={currentUser}></HomeFeed>
        ) : (
          <Login users={users} setCurrentUser={setCurrentUser} />
        )}
      </div>
    </>
  );
}

export default App;
