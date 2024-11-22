import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FinancialForm = () => {
  const [formData, setFormData] = useState({
    income: '',
    expenses: '',
    debt: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    navigate('/health-check'); // Navigate to the Health Check page
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Financial Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="income" style={{ marginRight: '10px' }}>
            Income:
          </label>
          <input
            type="text"
            id="income"
            name="income"
            placeholder="Enter your income"
            value={formData.income}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="expenses" style={{ marginRight: '10px' }}>
            Expenses:
          </label>
          <input
            type="text"
            id="expenses"
            name="expenses"
            placeholder="Enter your expenses"
            value={formData.expenses}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="debt" style={{ marginRight: '10px' }}>
            Debt:
          </label>
          <input
            type="text"
            id="debt"
            name="debt"
            placeholder="Enter your debt"
            value={formData.debt}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FinancialForm;
