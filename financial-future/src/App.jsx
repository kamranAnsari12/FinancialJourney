// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FinancialForm from './FinancialForm';
// import FinancialHealthPage from './FinancialHealthPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<FinancialForm />} />
//         <Route path="/health-check" element={<FinancialHealthPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
//   const [formData, setFormData] = useState({}); // Stores data from Page 1

//   // Handle form submission on Page 1
//   const handlePage1Submit = (data) => {
//     setFormData(data); // Save form data
//     setCurrentPage(2); // Navigate to Page 2
//   };

//   // Handle navigation from Page 2 to Page 3
//   const handleNavigateToPage3 = () => {
//     setCurrentPage(3); // Navigate to Page 3
//   };
  

//   return (
//     <div>
//       {currentPage === 1 && <Page1 onSubmit={handlePage1Submit} />}
//       {currentPage === 2 && (
//         <Page2
//           formData={formData}
//           onNavigateToPage3={handleNavigateToPage3}
//         />
//       )}
//       {currentPage === 3 && <Page3 />}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
//   const [page1Data, setPage1Data] = useState(null); // Stores data from Page 1
//   const [page3Data, setPage3Data] = useState(null); // Stores data from Page 3

//   // Handle form submission on Page 1
//   const handlePage1Submit = (data) => {
//     setPage1Data(data); // Save form data
//     setCurrentPage(2); // Navigate to Page 2
//   };

//   // Handle navigation from Page 2 to Page 3
//   const handleNavigateToPage3 = () => {
//     setCurrentPage(3); // Navigate to Page 3
//   };

//   // Handle form submission on Page 3
//   const handlePage3Submit = (data) => {
//     setPage3Data(data); // Save form data
//     console.log("Page 3 Data:", data);
//   };

//   // Download the combined JSON data
//   const downloadJSON = () => {
//     if (!page1Data || !page3Data) {
//       alert("Please fill out both forms before downloading the JSON file.");
//       return;
//     }

//     const combinedData = {
//       page1: page1Data,
//       page3: page3Data,
//     };

//     const blob = new Blob([JSON.stringify(combinedData, null, 2)], {
//       type: "application/json",
//     });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "form-data.json";
//     link.click();
//   };

//   return (
//     <div>
//       {currentPage === 1 && <Page1 onSubmit={handlePage1Submit} />}
//       {currentPage === 2 && (
//         <Page2 formData={page1Data} onNavigateToPage3={handleNavigateToPage3} />
//       )}
//       {currentPage === 3 && (
//         <div>
//           <Page3 onSubmitGoalSetting={handlePage3Submit} />
//           <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <button
//               onClick={downloadJSON}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//               }}
//             >
//               Download JSON
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const [page1Data, setPage1Data] = useState(null); // Stores data from Page 1
  const [page3Data, setPage3Data] = useState(null); // Stores data from Page 3
  const [combinedData, setCombinedData] = useState(null); // Stores combined JSON data

  // Handle form submission on Page 1
  const handlePage1Submit = (data) => {
    setPage1Data(data); // Save form data
    setCurrentPage(2); // Navigate to Page 2
  };

  // Handle navigation from Page 2 to Page 3
  const handleNavigateToPage3 = () => {
    setCurrentPage(3); // Navigate to Page 3
  };

  // Handle form submission on Page 3
  const handlePage3Submit = (data) => {
    setPage3Data(data); // Save form data
    const finalData = {
      page1: page1Data,
      page3: data,
    };
    setCombinedData(finalData); // Combine and store data
    console.log("Combined Data:", finalData); // Log the combined JSON data (only visible in the developer console)
  };

  return (
    <div>
      {currentPage === 1 && <Page1 onSubmit={handlePage1Submit} />}
      {currentPage === 2 && (
        <Page2 formData={page1Data} onNavigateToPage3={handleNavigateToPage3} />
      )}
      {currentPage === 3 && <Page3 onSubmitGoalSetting={handlePage3Submit} />}
    </div>
  );
};

export default App;
