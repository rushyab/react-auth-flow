import React, { useContext } from "react";
import { AlertInterface, alertContext } from "../../context/AlertContext";

const TOP_OFFSET = 6;

const Alert = () => {
  const { alerts } = useContext(alertContext);

  return (
    <>
      {alerts &&
        alerts.map((alert: AlertInterface, index: number) => (
          <div
            style={{
              width: "60%",
              position: "fixed",
              top: `${TOP_OFFSET * (index * 1.25 + 1)}%`,
              zIndex: 1000,
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
            key={`alert-${index}`}
          >
            <div
              id={alert.id}
              className={`alert fade-in fade-out ${
                alert.alertType === "danger"
                  ? "alert-danger"
                  : "alert-success"
              }`}
              // style={{
              //   backgroundColor:
              //     alert.alertType === "danger" ? "#dc3545" : "#28a745",
              //   borderColor:
              //     alert.alertType === "danger" ? "#f5c6cb" : "#c3e6cb",
              //   color: alert.alertType === "danger" ? "#f5c6cb" : "#c3e6cb",
              // }}
            >
              <p className="mb-0">
                {alert.alertType === "danger" ? (
                  <i className="fas fa-times-circle mx-2" />
                ) : (
                  <i className="fa fa-check mx-2" />
                )}
                {alert.msg}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Alert;
