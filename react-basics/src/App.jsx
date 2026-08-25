import React from 'react';
import UserCard from './UserCard';
import CounterApp from './CounterApp';
import LoginForm from './LoginForm';
import UserList from './UserList';
import UserProfileFetcher from './UserProfileFetcher';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>ReactJS Learning App</h2>
      <hr />
      
      {/* Day 6: Lifecycle & Side Effects */}
      <UserProfileFetcher />
      
      <hr />
      
      {/* Day 5: Dynamic Array & Conditional Rendering */}
      <UserList />

      <hr />
      
      {/* Day 4 Component */}
      <LoginForm />

      <hr />
      
      {/* Day 3: Counter App */}
      <CounterApp />

      <hr />

      {/* Day 2: User Cards */}
      <h3>Day 2: User Cards (Props Example)</h3>
      <UserCard name="Rahul Sharma" role="Frontend Developer" exp={2} location="Jaipur" />
      <UserCard name="Amit Kumar" role="jQuery Developer" exp={4} location="Delhi" />
      <UserCard name="Priya Singh" role="React Specialist" exp={1} location="Mumbai" />
    </div>
  );
}

export default App;