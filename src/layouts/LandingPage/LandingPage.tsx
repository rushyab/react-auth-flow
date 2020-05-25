import React from "react";
import { alertContext } from "../../context/AlertContext";

export function LandingPage() {
  const { addAlert } = React.useContext(alertContext);
  const [count, setCount] = React.useState(0);

  function AddAlert() {
    count % 2 === 0
      ? addAlert("This is a success message", "success")
      : addAlert("This is an error message", "danger");
    setCount(count + 1);
  }
  return (
    <div className="container">
      <button className="btn btn-large btn-primary my-2" onClick={AddAlert}>
        Click to display an alert
      </button>
      <p className="display-1">Landing Page</p>
    </div>
  );
}
