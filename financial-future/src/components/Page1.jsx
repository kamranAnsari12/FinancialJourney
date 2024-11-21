// import React, { useState } from "react";

// const Page1 = ({ onSubmit }) => {
//   const [income, setIncome] = useState("");
//   const [expenses, setExpenses] = useState("");
//   const [debt, setDebt] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ income, expenses, debt });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="number"
//         placeholder="Income"
//         value={income}
//         onChange={(e) => setIncome(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Expenses"
//         value={expenses}
//         onChange={(e) => setExpenses(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Debt"
//         value={debt}
//         onChange={(e) => setDebt(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Page1;

import React, { useState } from "react";

const Page1 = ({ onSubmit }) => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [hasDebt, setHasDebt] = useState(false);
  const [loans, setLoans] = useState([""]);

  const handleLoanChange = (index, value) => {
    const updatedLoans = [...loans];
    updatedLoans[index] = value;
    setLoans(updatedLoans);
  };

  const handleLoanNameChange = () => {
  };

  const handleLoanEMIChange = () => {
  };

  const handleInterestChange = () => {
  };

  const handleTenureChange = () => {
  };

  const handleRemoveLoan = (index) => {
    const updatedLoans = loans.filter((_, i) => i !== index);
    setLoans(updatedLoans);
  };

  const handleAddLoan = (index) => {
    setLoans([...loans, ""]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ income, expenses, loans: hasDebt ? loans : [] });
  };

  let counter = 1;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>What is your monthly income? : </label>
        <input
          type="number"
          placeholder="Monthly income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
      </div>

      <div>
        <label>What is your monthly household expense? : </label>
        <input
          type="number"
          placeholder="Enter your monthly expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Is there any debt/loan on you? : </label>
        <input
          type="checkbox"
          checked={hasDebt}
          onChange={(e) => setHasDebt(e.target.checked)}
        />
      </div>

      {hasDebt && (
        <div>
          {loans.map((loan, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <label>{counter++}. </label>
              <input
                type="text"
                placeholder={`Loan Type`}
                // value={loan}
                // onChange={(e) => handleLoanNameChange(index, e.target.value)}
              />
              <input
              type="number"
              placeholder={`EMI Per Month`}
              // value={loan}
              // onChange={(e) => handleLoanEMIChange(index, e.target.value)}
              />
              <input
                type="number"
                placeholder={`Interest Rate %`}
                // value={loan}
                // onChange={(e) => handleInterestChange(index, e.target.value)}
              />
              <input
                type="number"
                placeholder={`Tenure in months`}
                // value={loan}
                // onChange={(e) => handleTenureChange(index, e.target.value)}
              />
              {loans.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveLoan(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddLoan}>
            + Add Loan
          </button>
        </div>
      )}

      <button type="submit" style={{ marginTop: "20px" }}>
        Submit
      </button>
    </form>
  );
};

export default Page1;
