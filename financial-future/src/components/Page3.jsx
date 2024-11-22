// // // import React, { useState } from "react";

// // // const Page3 = ({ onSubmitGoalSetting }) => {
// // //   // State for the form inputs
// // //   const [age, setAge] = useState("");
// // //   const [investmentTenure, setInvestmentTenure] = useState("");

// // //   // Form submission handler
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Send data to parent or process further
// // //     onSubmitGoalSetting({ age, investmentTenure });
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         backgroundColor: "#f5f5f5",
// // //         minHeight: "100vh",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         alignItems: "center",
// // //         justifyContent: "center",
// // //         fontFamily: "Arial, sans-serif",
// // //         padding: "20px",
// // //       }}
// // //     >
// // //       <h2 style={{ marginBottom: "20px" }}>Goal Setting</h2>
// // //       <form
// // //         onSubmit={handleSubmit}
// // //         style={{
// // //           backgroundColor: "#fff",
// // //           padding: "20px",
// // //           borderRadius: "10px",
// // //           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// // //           width: "300px",
// // //         }}
// // //       >
// // //         {/* Age Input */}
// // //         <div style={{ marginBottom: "15px" }}>
// // //           <label
// // //             htmlFor="age"
// // //             style={{
// // //               display: "block",
// // //               fontWeight: "bold",
// // //               marginBottom: "5px",
// // //             }}
// // //           >
// // //             Enter your age
// // //           </label>
// // //           <input
// // //             type="number"
// // //             id="age"
// // //             value={age}
// // //             onChange={(e) => setAge(e.target.value)}
// // //             placeholder="Enter your age"
// // //             style={{
// // //               width: "100%",
// // //               padding: "8px",
// // //               borderRadius: "5px",
// // //               border: "1px solid #ccc",
// // //               fontSize: "14px",
// // //             }}
// // //             required
// // //           />
// // //         </div>

// // //         {/* Investment Tenure */}
// // //         <div style={{ marginBottom: "15px" }}>
// // //           <label
// // //             style={{
// // //               display: "block",
// // //               fontWeight: "bold",
// // //               marginBottom: "5px",
// // //             }}
// // //           >
// // //             Investment Tenure
// // //           </label>
// // //           <div>
// // //             <label style={{ display: "block", marginBottom: "5px" }}>
// // //               <input
// // //                 type="radio"
// // //                 name="investmentTenure"
// // //                 value="short"
// // //                 onChange={(e) => setInvestmentTenure(e.target.value)}
// // //                 required
// // //               />
// // //               Short Term (0-3 years)
// // //             </label>
// // //             <label style={{ display: "block", marginBottom: "5px" }}>
// // //               <input
// // //                 type="radio"
// // //                 name="investmentTenure"
// // //                 value="mid"
// // //                 onChange={(e) => setInvestmentTenure(e.target.value)}
// // //                 required
// // //               />
// // //               Mid Term (4-9 years)
// // //             </label>
// // //             <label style={{ display: "block", marginBottom: "5px" }}>
// // //               <input
// // //                 type="radio"
// // //                 name="investmentTenure"
// // //                 value="long"
// // //                 onChange={(e) => setInvestmentTenure(e.target.value)}
// // //                 required
// // //               />
// // //               Long Term (10+ years)
// // //             {/* </label> */}
// // //           </div>
// // //         </div>

// // //         {/* Submit Button */}
// // //         <button
// // //           type="submit"
// // //           style={{
// // //             width: "100%",
// // //             padding: "10px",
// // //             backgroundColor: "#007bff",
// // //             color: "#fff",
// // //             border: "none",
// // //             borderRadius: "5px",
// // //             cursor: "pointer",
// // //             fontSize: "16px",
// // //             fontWeight: "bold",
// // //           }}
// // //         >
// // //           Submit
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Page3;

// // import React, { useState } from "react";

// // const Page3 = ({ onSubmitGoalSetting }) => {
// //   // State for the form inputs
// //   const [age, setAge] = useState("");
// //   const [investmentTenure, setInvestmentTenure] = useState("short");
// //   const [shortTermGoals, setShortTermGoals] = useState([]);
// //   const [midTermGoals, setMidTermGoals] = useState([]);
// //   const [longTermGoals, setLongTermGoals] = useState([]);
// //   const [newGoal, setNewGoal] = useState("");

// //   // Handler to add a new goal to the selected tenure
// //   const handleAddGoal = () => {
// //     if (!newGoal.trim()) return;
// //     if (investmentTenure === "short") {
// //       setShortTermGoals([...shortTermGoals, newGoal]);
// //     } else if (investmentTenure === "mid") {
// //       setMidTermGoals([...midTermGoals, newGoal]);
// //     } else if (investmentTenure === "long") {
// //       setLongTermGoals([...longTermGoals, newGoal]);
// //     }
// //     setNewGoal(""); // Clear input after adding
// //   };

// //   // Handler to remove a goal from the selected tenure
// //   const handleRemoveGoal = (index) => {
// //     if (investmentTenure === "short") {
// //       setShortTermGoals(shortTermGoals.filter((_, i) => i !== index));
// //     } else if (investmentTenure === "mid") {
// //       setMidTermGoals(midTermGoals.filter((_, i) => i !== index));
// //     } else if (investmentTenure === "long") {
// //       setLongTermGoals(longTermGoals.filter((_, i) => i !== index));
// //     }
// //   };

// //   // Form submission handler
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const goalData = {
// //       age,
// //       shortTermGoals,
// //       midTermGoals,
// //       longTermGoals,
// //     };
// //     onSubmitGoalSetting(goalData);
// //   };

// //   return (
// //     <div
// //       style={{
// //         backgroundColor: "#f5f5f5",
// //         minHeight: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         fontFamily: "Arial, sans-serif",
// //         padding: "20px",
// //       }}
// //     >
// //       <h2 style={{ marginBottom: "20px" }}>Goal Setting</h2>
// //       <form
// //         onSubmit={handleSubmit}
// //         style={{
// //           backgroundColor: "#fff",
// //           padding: "20px",
// //           borderRadius: "10px",
// //           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //           width: "400px",
// //         }}
// //       >
// //         {/* Age Input */}
// //         <div style={{ marginBottom: "15px" }}>
// //           <label
// //             htmlFor="age"
// //             style={{
// //               display: "block",
// //               fontWeight: "bold",
// //               marginBottom: "5px",
// //             }}
// //           >
// //             Enter your age
// //           </label>
// //           <input
// //             type="number"
// //             id="age"
// //             value={age}
// //             onChange={(e) => setAge(e.target.value)}
// //             placeholder="Enter your age"
// //             style={{
// //               width: "100%",
// //               padding: "8px",
// //               borderRadius: "5px",
// //               border: "1px solid #ccc",
// //               fontSize: "14px",
// //             }}
// //             required
// //           />
// //         </div>

// //         {/* Investment Tenure */}
// //         <div style={{ marginBottom: "15px" }}>
// //           <label
// //             style={{
// //               display: "block",
// //               fontWeight: "bold",
// //               marginBottom: "5px",
// //             }}
// //           >
// //             Select Investment Tenure
// //           </label>
// //           <div>
// //             <label style={{ display: "block", marginBottom: "5px" }}>
// //               <input
// //                 type="radio"
// //                 name="investmentTenure"
// //                 value="short"
// //                 checked={investmentTenure === "short"}
// //                 onChange={(e) => setInvestmentTenure(e.target.value)}
// //               />
// //               Short Term (0-3 years)
// //             </label>
// //             <label style={{ display: "block", marginBottom: "5px" }}>
// //               <input
// //                 type="radio"
// //                 name="investmentTenure"
// //                 value="mid"
// //                 checked={investmentTenure === "mid"}
// //                 onChange={(e) => setInvestmentTenure(e.target.value)}
// //               />
// //               Mid Term (4-9 years)
// //             </label>
// //             <label style={{ display: "block", marginBottom: "5px" }}>
// //               <input
// //                 type="radio"
// //                 name="investmentTenure"
// //                 value="long"
// //                 checked={investmentTenure === "long"}
// //                 onChange={(e) => setInvestmentTenure(e.target.value)}
// //               />
// //               Long Term (10+ years)
// //             </label>
// //           </div>
// //         </div>

// //         {/* Add Goal Section */}
// //         <div style={{ marginBottom: "15px" }}>
// //           <label
// //             htmlFor="newGoal"
// //             style={{
// //               display: "block",
// //               fontWeight: "bold",
// //               marginBottom: "5px",
// //             }}
// //           >
// //             Add a Goal
// //           </label>
// //           <input
// //             type="text"
// //             id="newGoal"
// //             value={newGoal}
// //             onChange={(e) => setNewGoal(e.target.value)}
// //             placeholder="Enter your goal"
// //             style={{
// //               width: "100%",
// //               padding: "8px",
// //               borderRadius: "5px",
// //               border: "1px solid #ccc",
// //               fontSize: "14px",
// //               marginBottom: "5px",
// //             }}
// //           />
// //           <button
// //             type="button"
// //             onClick={handleAddGoal}
// //             style={{
// //               padding: "8px 15px",
// //               backgroundColor: "#28a745",
// //               color: "#fff",
// //               border: "none",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //               fontSize: "14px",
// //             }}
// //           >
// //             Add Goal
// //           </button>
// //         </div>

// //         {/* Display Goals */}
// //         <div style={{ marginBottom: "15px" }}>
// //           <h4 style={{ marginBottom: "10px" }}>
// //             {investmentTenure === "short"
// //               ? "Short Term Goals"
// //               : investmentTenure === "mid"
// //               ? "Mid Term Goals"
// //               : "Long Term Goals"}
// //           </h4>
// //           <ul style={{ listStyleType: "none", padding: "0" }}>
// //             {(investmentTenure === "short"
// //               ? shortTermGoals
// //               : investmentTenure === "mid"
// //               ? midTermGoals
// //               : longTermGoals
// //             ).map((goal, index) => (
// //               <li
// //                 key={index}
// //                 style={{
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   alignItems: "center",
// //                   marginBottom: "5px",
// //                 }}
// //               >
// //                 {goal}
// //                 <button
// //                   type="button"
// //                   onClick={() => handleRemoveGoal(index)}
// //                   style={{
// //                     padding: "5px 10px",
// //                     backgroundColor: "#dc3545",
// //                     color: "#fff",
// //                     border: "none",
// //                     borderRadius: "5px",
// //                     cursor: "pointer",
// //                     fontSize: "12px",
// //                   }}
// //                 >
// //                   Remove
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           style={{
// //             width: "100%",
// //             padding: "10px",
// //             backgroundColor: "#007bff",
// //             color: "#fff",
// //             border: "none",
// //             borderRadius: "5px",
// //             cursor: "pointer",
// //             fontSize: "16px",
// //             fontWeight: "bold",
// //           }}
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Page3;

// import React, { useState } from "react";

// const Page3 = ({ onSubmitGoalSetting }) => {
//   // State for form inputs
//   const [goal, setGoal] = useState("");
//   const [amount, setAmount] = useState("");
//   const [goals, setGoals] = useState([]);

//   // Handler to add a new goal
//   const handleAddGoal = () => {
//     if (!goal.trim() || !amount.trim()) return;
//     setGoals([...goals, { goal, amount }]);
//     setGoal("");
//     setAmount("");
//   };

//   // Handler to remove a goal
//   const handleRemoveGoal = (index) => {
//     setGoals(goals.filter((_, i) => i !== index));
//   };

//   // Form submission handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmitGoalSetting(goals); // Pass goals to parent component
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#f5f5f5",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         fontFamily: "Arial, sans-serif",
//         padding: "20px",
//       }}
//     >
//       <h2 style={{ marginBottom: "20px" }}>Goal Setting</h2>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           backgroundColor: "#fff",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           width: "400px",
//         }}
//       >
//         {/* Goal Input */}
//         <div style={{ marginBottom: "15px" }}>
//           <label
//             htmlFor="goal"
//             style={{
//               display: "block",
//               fontWeight: "bold",
//               marginBottom: "5px",
//             }}
//           >
//             Add a Goal
//           </label>
//           <input
//             type="text"
//             id="goal"
//             value={goal}
//             onChange={(e) => setGoal(e.target.value)}
//             placeholder="Enter your goal"
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               fontSize: "14px",
//               marginBottom: "5px",
//             }}
//             required
//           />
//         </div>

//         {/* Amount Input */}
//         <div style={{ marginBottom: "15px" }}>
//           <label
//             htmlFor="amount"
//             style={{
//               display: "block",
//               fontWeight: "bold",
//               marginBottom: "5px",
//             }}
//           >
//             Approximate Amount
//           </label>
//           <input
//             type="number"
//             id="amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter the amount"
//             style={{
//               width: "100%",
//               padding: "8px",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               fontSize: "14px",
//               marginBottom: "5px",
//             }}
//             required
//           />
//         </div>

//         {/* Add Goal Button */}
//         <button
//           type="button"
//           onClick={handleAddGoal}
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#28a745",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px",
//             fontWeight: "bold",
//             marginBottom: "15px",
//           }}
//         >
//           Add Goal
//         </button>

//         {/* Display Goals */}
//         <div style={{ marginBottom: "15px" }}>
//           <h4 style={{ marginBottom: "10px" }}>Your Goals</h4>
//           <ul style={{ listStyleType: "none", padding: "0" }}>
//             {goals.map((item, index) => (
//               <li
//                 key={index}
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   backgroundColor: "#f9f9f9",
//                   borderRadius: "5px",
//                   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <span>
//                   {item.goal} - ${item.amount}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveGoal(index)}
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#dc3545",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                     fontSize: "12px",
//                   }}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Page3;
import React, { useState } from "react";

const Page3 = ({ onSubmitGoalSetting }) => {
  // State for form inputs
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("short-term");
  const [goals, setGoals] = useState([]);

  // Handler to add a new goal
  const handleAddGoal = () => {
    if (!goal.trim() || !amount.trim()) return;
    setGoals([...goals, { goal, amount, term }]);
    setGoal("");
    setAmount("");
    setTerm("short-term");
  };

  // Handler to remove a goal
  const handleRemoveGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitGoalSetting(goals); // Pass goals to parent component
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
            required
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
            required
          />
        </div>

        {/* Term Selector */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="term"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Select Goal Term
          </label>
          <select
            id="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
              marginBottom: "5px",
            }}
          >
            <option value="short-term">Short Term</option>
            <option value="mid-term">Mid Term</option>
            <option value="long-term">Long Term</option>
          </select>
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
                  {item.goal} - ${item.amount} ({item.term})
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
