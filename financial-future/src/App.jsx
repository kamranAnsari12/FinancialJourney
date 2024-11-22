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


import React, { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const [formData, setFormData] = useState({}); // Stores data from Page 1

  // Handle form submission on Page 1
  const handlePage1Submit = (data) => {
    setFormData(data); // Save form data
    setCurrentPage(2); // Navigate to Page 2
  };

  // Handle navigation from Page 2 to Page 3
  const handleNavigateToPage3 = () => {
    setCurrentPage(3); // Navigate to Page 3
  };

  return (
    <div>
      {currentPage === 1 && <Page1 onSubmit={handlePage1Submit} />}
      {currentPage === 2 && (
        <Page2
          formData={formData}
          onNavigateToPage3={handleNavigateToPage3}
        />
      )}
      {currentPage === 3 && <Page3 />}
    </div>
  );
};

export default App;
