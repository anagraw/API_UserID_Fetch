import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jresnponse = await response.json();
    setUsers(jresnponse);
  };
  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users: </h2>
      <ul>
        {users.map(({ id, login }) => (
          <li key={id}> Name: {login}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
