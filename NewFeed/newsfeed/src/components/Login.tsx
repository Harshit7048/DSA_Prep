import { useState } from "react";

export default function Login({ users, setCurrentUser }) {
  const [inputText, setInputText] = useState("");
  const [inputPass, setInputPass] = useState("");

  const handleSubmit = function (name, pass) {
    const user = users.find(
      (ele) => ele.name === name && ele.password === pass,
    );
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  };

  return (
    <div>
      <h2>Login First</h2>
      <input
        type='text'
        name='inputText'
        onChange={(e) => setInputText(e.target.value)}
        placeholder='enter username'
      />
      <input
        type='text'
        name='inputPass'
        onChange={(e) => setInputPass(e.target.value)}
        placeholder='enter password'
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(inputText, inputPass);
        }}
      >
        Submit
      </button>
    </div>
  );
}
