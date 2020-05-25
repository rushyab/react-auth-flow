import React from "react";
import Routes from "../../layouts/Routes";
import AlertContextProvider from "../../context/AlertContext";
import Alert from "../CommonComponents/Alert";

function App() {
  return (
    <div className="App">
      <AlertContextProvider>
        <Alert />
        <Routes />
      </AlertContextProvider>
    </div>
  );
}

export default App;
