import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // +5 Homework Handler
  const handleAddFive = () => {
    setCount(count + 5);
  };

  return (
    <div style={{
      border: "2px solid #007bff",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "350px",
      margin: "20px 0",
      textAlign: "center"
    }}>
      <h3>Day 3: Interactive Counter</h3>
      <h1 style={{ fontSize: "48px", color: count > 0 ? "#28a745" : "#6c757d" }}>
        {count}
      </h1>

      <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
        <button 
          onClick={handleDecrease}
          style={{ padding: "8px 12px", cursor: "pointer", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px" }}
        >
          - Decrease
        </button>

        <button 
          onClick={() => setCount(0)}
          style={{ padding: "8px 12px", cursor: "pointer", backgroundColor: "#ffc107", border: "none", borderRadius: "5px" }}
        >
          Reset
        </button>

        <button 
          onClick={handleIncrease}
          style={{ padding: "8px 12px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}
        >
          + Increase
        </button>

        <button 
          onClick={handleAddFive}
          style={{ padding: "8px 12px", cursor: "pointer", backgroundColor: "#17a2b8", color: "white", border: "none", borderRadius: "5px" }}
        >
          +5
        </button>
      </div>
    </div>
  );
}

export default CounterApp;