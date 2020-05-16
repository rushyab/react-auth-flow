import React, { useContext } from "react";
import logo from "../../logo.svg";
// import "./App.css";
import { authContext } from "../../context/AuthContext";
import Routes from "../../layouts/Routes";

function App() {
  const { auth } = useContext(authContext);
  console.log(auth);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
