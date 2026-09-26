import React from 'react';
import UserCard from './UserCard'; // Day 8 Module
import CounterApp from './CounterApp'; // Day 3 Module
import LoginForm from './LoginForm'; // Day 4 Module
import UserList from './UserList'; // Day 5 Module
import UserProfileFetcher from './UserProfileFetcher'; // Day 6 Module
import RealApiFetcher from './RealApiFetcher'; // Day 7 Module
import CustomHookDemo from './CustomHookDemo'; // Day 8 Module

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>ReactJS Learning App</h2>
      <hr />

      {/* Day 8: Custom Hooks */}
      <CustomHookDemo />
      
      <hr />
      
      {/* Day 7: Real API Integration */}
      <RealApiFetcher />
      
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