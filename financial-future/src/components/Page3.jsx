

import React, { useState } from "react";

const Page3 = ({ onSubmitGoalSetting }) => {
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("short-term");
  const [goals, setGoals] = useState([]);
  const [goaltenure, setgoaltenure]=useState([]);
  const [error, setError] = useState("");

  // const handleAddGoal = () => {
  //   if (!goal.trim() || !amount.trim()) {
  //     setError("Please fill out both the goal and amount fields.");
  //     return;
  //   }
  //   setGoals([...goals, { goal, amount, term,goaltenure }]);
  //   setGoal("");
  //   setAmount("");
  //   setTerm("short-term");
  //   setgoaltenure("");
  //   setError(""); // Clear error after successful goal addition
  // };
  const handleAddGoal = () => {
    if (!goal.trim() || !amount.trim() || !goaltenure.trim()) {
      setError("Please fill out all fields (goal, amount, and tenure).");
      return;
    }
    
    setGoals([...goals, { goal, amount, term, goaltenure }]); // Add goaltenure to the goal object
    setGoal("");
    setAmount("");
    setTerm("short-term");
    setgoaltenure("");
    setError(""); // Clear error after successful goal addition
  };
  
  const handleRemoveGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!age.trim()) {
  //     setError("Please enter your age.");
  //     return;
  //   }
  //   if (goals.length === 0) {
  //     setError("Please add at least one goal before submitting.");
  //     return;
  //   }
  //   setError("");
  //   onSubmitGoalSetting({ age, goals,goaltenure });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!age.trim()) {
      setError("Please enter your age.");
      return;
    }
    if (goals.length === 0) {
      setError("Please add at least one goal before submitting.");
      return;
    }
    setError("");
    onSubmitGoalSetting({ age, goals }); // Each goal already includes goaltenure
  };
  
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
      <h2 style={{ marginBottom: "20px" }}>Goal Setting</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        {/* Age Input */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="age"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Enter Your Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              marginBottom: "5px",
            }}
            required
          />
        </div>

        {/* Goal Term Radio Buttons */}
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Select Goal Term
          </label>
          <div>
            <label>
              <input
                type="radio"
                value="short-term"
                checked={term === "short-term"}
                onChange={(e) => setTerm(e.target.value)}
              />{" "}
              Short Term
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                value="mid-term"
                checked={term === "mid-term"}
                onChange={(e) => setTerm(e.target.value)}
              />{" "}
              Mid Term
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                value="long-term"
                checked={term === "long-term"}
                onChange={(e) => setTerm(e.target.value)}
              />{" "}
              Long Term
            </label>
          </div>
        </div>

        {/* Goal Input */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="goal"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Add a Goal
          </label>
          <input
            type="text"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter your goal"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              marginBottom: "5px",
            }}
          />
        </div>

        {/* Amount Input */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="amount"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Approximate Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              marginBottom: "5px",
            }}
          />
        </div>
         {/* Goal tenure  */}
         <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="amount"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Goal Tenure
                      </label>
          <input
            type="number"
            id="goaltenure"
            value={goaltenure}
            onChange={(e) => setgoaltenure(e.target.value)}
            placeholder="Enter the Tenure"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              marginBottom: "5px",
            }}
          />
        </div>
        

        {/* Add Goal Button */}
        <button
          type="button"
          onClick={handleAddGoal}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Add Goal
        </button>

        {/* Display Goals */}
        <div style={{ marginBottom: "15px" }}>
          <h4 style={{ marginBottom: "10px" }}>Your Goals</h4>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {goals.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span>
                  {item.goal} -  ₹{item.amount} ({item.term})
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveGoal(index)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {error && (
          <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page3;
