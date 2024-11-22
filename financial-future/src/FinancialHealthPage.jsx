import React, { useState } from 'react';

const FinancialHealthPage = () => {
  const [showMeter, setShowMeter] = useState(false);

  const handlePlanFuture = () => {
    setShowMeter(true);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Financial Health Check</h2>
      <button
        onClick={handlePlanFuture}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Plan Your Future
      </button>

      {showMeter && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3>Your Financial Health</h3>
          <div
            style={{
              width: '100%',
              height: '150px',
              background: 'linear-gradient(to right, red, yellow, green)',
              borderRadius: '10px',
              position: 'relative',
            }}
          >
            {/* Placeholder for Financial Meter */}
            <div
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`, // Replace with actual logic later
                bottom: '0',
                width: '2px',
                height: '150px',
                backgroundColor: 'black',
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialHealthPage;
