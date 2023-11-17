// src/App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">GitHub Profile Viewer</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <button onClick={fetchUserData} className="ml-2 bg-blue-500 text-white p-2">
          Search
        </button>
      </div>
      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">{userData.login}</h2>
          <p>{userData.bio}</p>
          <p className="mt-2">
            Followers: {userData.followers} | Following: {userData.following}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;

