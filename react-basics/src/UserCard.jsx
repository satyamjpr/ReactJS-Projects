import React from 'react';

function UserCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px 0",
      backgroundColor: "#f9f9f9"
    }}>
      <h3 style={{ margin: "0 0 5px 0" }}>Name: {props.name}</h3>
      <p style={{ margin: "0 0 5px 0" }}>Role: {props.role}</p>
      <p style={{ margin: "0 0 5px 0" }}>Experience: {props.exp} Years</p>
      <p style={{ margin: "0" }}>Location: {props.location || "Not Specified"}</p>
    </div>
  );
}

export default UserCard;