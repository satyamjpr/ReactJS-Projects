import React, { useState } from 'react';

function LoginForm() {
  // Single State Object for all inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    role: 'Developer'
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Universal Handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData, // Existing state retain rakhega (Spread Operator)
      [name]: value // Dynamic input name update karega
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh hone se rokta hai
    setSubmittedData(formData);
  };

  return (
    <div style={{
      border: "2px solid #28a745",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "400px",
      margin: "20px 0"
    }}>
      <h3>Day 4: Controlled Form Handling</h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Full Name: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter name"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email Address: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Phone Number: </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Role: </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={{ width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Submit Form
        </button>
      </form>

      {/* Live State Preview */}
      <div style={{ marginTop: "15px", background: "#f8f9fa", padding: "10px", borderRadius: "5px" }}>
        <small><b>Live State Preview:</b> {JSON.stringify(formData)}</small>
      </div>

      {/* Output Display */}
      {submittedData && (
        <div style={{ marginTop: "15px", borderTop: "1px dashed #ccc", paddingTop: "10px" }}>
          <h4 style={{ color: "#007bff", margin: "0 0 5px 0" }}>Submitted User Info:</h4>
          <p style={{ margin: "2px 0" }}><b>Name:</b> {submittedData.username}</p>
          <p style={{ margin: "2px 0" }}><b>Email:</b> {submittedData.email}</p>
          <p style={{ margin: "2px 0" }}><b>Phone:</b> {submittedData.phone}</p>
          <p style={{ margin: "2px 0" }}><b>Role:</b> {submittedData.role}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;