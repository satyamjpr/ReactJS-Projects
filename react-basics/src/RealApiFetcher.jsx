import React, { useState, useEffect } from 'react';

/**
 * RealApiFetcher Component
 * Demonstrates fetching data from a live REST API (JSONPlaceholder)
 * Handles Loading, Error, and Success states cleanly using useEffect.
 */
function RealApiFetcher() {
  // State 1: Store fetched user list
  const [users, setUsers] = useState([]);

  // State 2: Track API call pending status
  const [loading, setLoading] = useState(true);

  // State 3: Store error messages if API fails
  const [error, setError] = useState(null);

  // Function to perform async API fetch
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      // Direct REST API Endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      // Check HTTP status code
      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data); // Populate state with real API response
    } catch (err) {
      setError(err.message || "Failed to fetch user list from server");
    } finally {
      setLoading(false); // Disable loading spinner regardless of success/error
    }
  };

  // Trigger API call on initial component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{
      border: "2px solid #fd7e14",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "500px",
      margin: "20px 0"
    }}>
      <h3>Day 7: Real REST API Fetching</h3>

      {/* Manual Refresh Button */}
      <button
        onClick={fetchUsers}
        disabled={loading}
        style={{
          padding: "8px 12px",
          backgroundColor: loading ? "#6c757d" : "#fd7e14",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
          marginBottom: "15px"
        }}
      >
        {loading ? "Refreshing..." : "Reload Users List"}
      </button>

      {/* State 1: Loading Handler */}
      {loading && (
        <p style={{ color: "#fd7e14", fontWeight: "bold" }}>
          🔄 Loading live data from JSONPlaceholder API...
        </p>
      )}

      {/* State 2: Error Handler */}
      {error && (
        <div style={{ background: "#f8d7da", color: "#721c24", padding: "10px", borderRadius: "5px" }}>
          ⚠️ <b>API Error:</b> {error}
        </div>
      )}

      {/* State 3: Success Data Display */}
      {!loading && !error && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.slice(0, 5).map((user) => (
            <li 
              key={user.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <strong>{user.name}</strong> <small>({user.company.name})</small>
                <br />
                <span style={{ fontSize: "12px", color: "#6c757d" }}>📧 {user.email}</span>
              </div>
              <span style={{ fontSize: "12px", background: "#e9ecef", padding: "3px 6px", borderRadius: "4px" }}>
                🌐 {user.website}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RealApiFetcher;