import React from "react";
import Goal from "../assets/Goals.jpg"

const Page4 = ({}) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Your Financial Goals</h2>
      <div style={{ textAlign: "center" }}>
        <img
          src={Goal}
          alt="Goals"
          style={{
            width: "80%",
            maxWidth: "600px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default Page4;
