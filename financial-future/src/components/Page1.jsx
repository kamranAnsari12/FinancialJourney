import React, { useState } from "react";

const Page1 = ({ onSubmit }) => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [hasDebt, setHasDebt] = useState(false);
  const [loans, setLoans] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleLoanChange = (index, field, value) => {
    const updatedLoans = [...loans];
    updatedLoans[index][field] = value;
    setLoans(updatedLoans);
  };

  const handleAddLoan = () => {
    setLoans([...loans, { loanType: "", emi: "", interestRate: "", tenure: "" }]);
  };

  const handleRemoveLoan = (index) => {
    const updatedLoans = loans.filter((_, i) => i !== index);
    setLoans(updatedLoans);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalLoanEMI = loans.reduce((sum, loan) => sum + (parseFloat(loan.emi) || 0), 0);

    if (parseFloat(expenses) + totalLoanEMI > parseFloat(income)) {
      setShowPopup(true);
      return;
    }

    onSubmit({ income, expenses, loans: hasDebt ? loans : [] });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1c1c1c, #f5f5f5)", // Black to whitish gradient
        color: "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#ffffff", // White background
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "400px",
          textAlign: "center",
          margin: "0 auto", // Ensures centering within a block
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Financial Form</h2>
        <div style={{ marginBottom: "15px" }}>
          <label>What is your monthly income? :</label>
          <input
            type="number"
            placeholder="Monthly income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>What is your monthly household expense? :</label>
          <input
            type="number"
            placeholder="Monthly expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Is there any debt/loan on you? :</label>
          <input
            type="checkbox"
            checked={hasDebt}
            onChange={(e) => setHasDebt(e.target.checked)}
            style={{ marginLeft: "10px" }}
          />
        </div>

        {hasDebt && (
          <div style={{ marginBottom: "15px" }}>
            {loans.map((loan, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <input
                  type="text"
                  placeholder="Loan Type"
                  value={loan.loanType}
                  onChange={(e) => handleLoanChange(index, "loanType", e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="number"
                  placeholder="EMI Per Month"
                  value={loan.emi}
                  onChange={(e) => handleLoanChange(index, "emi", e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="number"
                  placeholder="Interest Rate %"
                  value={loan.interestRate}
                  onChange={(e) => handleLoanChange(index, "interestRate", e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <input
                  type="number"
                  placeholder="Tenure in months"
                  value={loan.tenure}
                  onChange={(e) => handleLoanChange(index, "tenure", e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                {loans.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveLoan(index)}
                    style={{
                      backgroundColor: "#d9534f",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "5px",
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddLoan}
              style={{
                backgroundColor: "#5bc0de",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              + Add Loan
            </button>
          </div>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#5cb85c",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </button>

        {showPopup && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "20px",
              border: "1px solid black",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              zIndex: "1000",
            }}
          >
            <p style={{ color: "red" }}>
              Warning: Your total monthly expenses (including loan EMIs) exceed
              your income.
            </p>
            <button
              onClick={closePopup}
              style={{
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Close
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Page1;
