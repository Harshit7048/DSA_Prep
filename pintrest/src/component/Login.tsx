import { use, useState } from "react";
import { UserProvider, useUser } from "../context/UserContext";
import { userData } from "../data/userData";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username || !password) {
      alert("Fill the form first");
      return;
    }

    const foundUser = userData.find(
      (ele) => ele.name === username && ele.password === password,
    );

    if (foundUser) {
      setUser(foundUser);

      setUserName("");
      setPassword("");

      navigate("/", { replace: true });
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div>
      <input
        type='text'
        placeholder='enter username'
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type='text'
        placeholder='enter password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Login
      </button>
    </div>
  );
}
