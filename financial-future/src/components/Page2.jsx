import React from "react";

const Page2 = ({ formData, onNavigateToPage3 }) => {
  const { income, expenses, loans } = formData;

  return (
    <div>
      <h2>Financial Health Meter</h2>
      <p>Income: {income}</p>
      <p>Expenses: {expenses}</p>
      <p>
        Debt:{" "}
        {loans && loans.length > 0 ? (
          <ul>
            {loans.map((loan, index) => (
              <li key={index}>
                Loan {index + 1}: 
                <ul>
                  <li>Loan Type: {loan.loanType}</li>
                  <li>EMI: {loan.emi}</li>
                  <li>Interest Rate: {loan.interestRate}%</li>
                  <li>Tenure: {loan.tenure} months</li>
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          "No debt"
        )}
      </p>
      {/* Add your meter visualization logic here */}
      <button onClick={onNavigateToPage3}>Go to Page 3</button>
    </div>
  );
};

export default Page2;
