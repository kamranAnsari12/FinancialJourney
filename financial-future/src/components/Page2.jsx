// import React from "react";
// import PerformanceMeter from "./performancemeter";

// const Page2 = ({ formData, onNavigateToPage3 }) => {
//   const { income, expenses, loans } = formData;

//   return (
//     <div>
//        <PerformanceMeter/>
//       <h2>Financial Health Meter</h2>
     
//       <p>Income: {income}</p>
//       <p>Expenses: {expenses}</p>
//       <p>
//         Debt:{" "}
//         {loans && loans.length > 0 ? (
//           <ul>
//             {loans.map((loan, index) => (
//               <li key={index}>
//                 Loan {index + 1}: 
//                 <ul>
//                   <li>Loan Type: {loan.loanType}</li>
//                   <li>EMI: {loan.emi}</li>
//                   <li>Interest Rate: {loan.interestRate}%</li>
//                   <li>Tenure: {loan.tenure} months</li>
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           "No debt"
//         )}
//       </p>
//       {/* Add your meter visualization logic here */}
//       <button onClick={onNavigateToPage3}>Go to Page 3</button>
//     </div>
//   );
// };

// export default Page2;

import React from "react";
import PerformanceMeter from "./performancemeter";

const Page2 = ({ formData, onNavigateToPage3 }) => {
  const { income, expenses, loans } = formData;

  // Calculate total monthly loan (sum of all EMIs)
  const totalMonthlyLoan = loans.reduce((sum, loan) => sum + parseFloat(loan.emi || 0), 0);

  // Calculate the performance score
  const score = ((income - expenses - totalMonthlyLoan) / income) * 100;

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
      <h2 style={{ marginBottom: "20px" }}>Financial Health Meter</h2>

      {/* Performance Meter */}
      <PerformanceMeter score={score} />

      {/* Display financial details */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <p><strong>Income:</strong> ${income}</p>
        <p><strong>Expenses:</strong> ${expenses}</p>
        <p><strong>Total Monthly Loan:</strong> ${totalMonthlyLoan}</p>
        <p>
          <strong>Debt:</strong>{" "}
          {loans && loans.length > 0 ? (
            <ul style={{ textAlign: "left" }}>
              {loans.map((loan, index) => (
                <li key={index}>
                  <strong>Loan {index + 1}:</strong>
                  <ul>
                    <li>Type: {loan.loanType}</li>
                    <li>EMI: ${loan.emi}</li>
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
      </div>

      {/* Navigation Button */}
      <button
        onClick={onNavigateToPage3}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Go to Page 3
      </button>
    </div>
  );
};

export default Page2;
