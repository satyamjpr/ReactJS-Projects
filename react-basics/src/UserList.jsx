import React, { useState } from 'react';

function UserList() {
  // Dummy Dynamic Array (Simulating API Data)
  const [users, setUsers] = useState([
    { id: 101, name: "Rahul Sharma", role: "Frontend Dev", isOnline: true },
    { id: 102, name: "Priya Singh", role: "UI/UX Designer", isOnline: false },
    { id: 103, name: "Amit Kumar", role: "Backend Dev", isOnline: true },
    { id: 104, name: "Neha Verma", role: "QA Engineer", isOnline: false }
  ]);

  // Toggle State for Conditional Rendering
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  // Filter Users based on toggle state
  const filteredUsers = showOnlineOnly 
    ? users.filter(user => user.isOnline) 
    : users;

  return (
    <div style={{
      border: "2px solid #007bff",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "450px",
      margin: "20px 0"
    }}>
      <h3>Day 5: Dynamic List & Conditional Rendering</h3>

      {/* Toggle Button (Conditional State Handler) */}
      <button 
        onClick={() => setShowOnlineOnly(!showOnlineOnly)}
        style={{
          padding: "8px 12px",
          marginBottom: "15px",
          backgroundColor: showOnlineOnly ? "#28a745" : "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {showOnlineOnly ? "Show All Users" : "Show Online Users Only"}
      </button>

      {/* Array Mapping (.map) */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredUsers.map((user) => (
          <li 
            key={user.id} // Mandatory unique key for React performance
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <strong>{user.name}</strong> <small>({user.role})</small>
            </div>

            {/* Conditional Rendering (Ternary Operator) */}
            <span style={{
              padding: "4px 8px",
              borderRadius: "12px",
              fontSize: "12px",
              color: "white",
              backgroundColor: user.isOnline ? "#28a745" : "#dc3545"
            }}>
              {user.isOnline ? "Online" : "Offline"}
            </span>
          </li>
        ))}
      </ul>

      {/* Short-Circuit Evaluation (&& Operator) */}
      {filteredUsers.length === 0 && (
        <p style={{ color: "#dc3545" }}>No users found for this filter!</p>
      )}
    </div>
  );
}

export default UserList;