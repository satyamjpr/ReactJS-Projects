import React, { useState, useEffect } from 'react';

/**
 * UserProfileFetcher Component
 * Demonstrates component lifecycle management and side-effects using useEffect.
 */
function UserProfileFetcher() {
  // State for storing fetched profile data
  const [user, setUser] = useState(null);
  
  // State for managing loading status during data fetch
  const [loading, setLoading] = useState(true);
  
  // State for toggling auto-refresh dependency
  const [userId, setUserId] = useState(1);

  // Side-Effect: Executes whenever 'userId' updates, and runs once on component mount
  useEffect(() => {
    let isMounted = true; // Flag to handle race conditions and async memory leaks
    setLoading(true);

    // Mock API call simulation using setTimeout
    const timer = setTimeout(() => {
      if (isMounted) {
        // Simulated API response payload
        setUser({
          id: userId,
          name: userId === 1 ? "Satyam Saxena" : "Alex Rivera",
          role: userId === 1 ? "React Developer" : "Full Stack Engineer",
          updatedAt: new Date().toLocaleTimeString()
        });
        setLoading(false);
      }
    }, 1200);

    // Cleanup function: Triggered automatically before re-running effect or unmounting component
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [userId]); // Dependency array tracking userId changes

  return (
    <div style={{
      border: "2px solid #6f42c1",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "450px",
      margin: "20px 0"
    }}>
      <h3>Day 6: Lifecycle & useEffect Hook</h3>

      {/* Controller to trigger dependency change */}
      <div style={{ marginBottom: "15px" }}>
        <button 
          onClick={() => setUserId(userId === 1 ? 2 : 1)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#6f42c1",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Switch User Profile (Current ID: {userId})
        </button>
      </div>

      {/* Conditional Rendering based on state */}
      {loading ? (
        <p style={{ color: "#fd7e14" }}>⌛ Fetching profile data from server...</p>
      ) : (
        <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "5px" }}>
          <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>{user.name}</h4>
          <p style={{ margin: "2px 0", fontSize: "14px" }}><b>Role:</b> {user.role}</p>
          <small style={{ color: "#6c757d" }}>Last Synced: {user.updatedAt}</small>
        </div>
      )}
    </div>
  );
}

export default UserProfileFetcher;