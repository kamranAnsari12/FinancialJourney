import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinancialForm from './FinancialForm';
import FinancialHealthPage from './FinancialHealthPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FinancialForm />} />
        <Route path="/health-check" element={<FinancialHealthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
