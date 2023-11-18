// src/App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const searchUserByName = async (name) => {
    try {
      const token = import.meta.env.VITE_PERSONAL_TOKEN
      const perPage = 25;
    const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(name)}&per_page=${perPage}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        const users = data.items;
        console.log(users);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  searchUserByName('John Doe');  

  return (
    <div className="container mx-auto mt-8 text-center">
      <img className='h-40 w-40' src="/src/assets/git-icon.png" alt="" />
      <h1 className="text-4xl font-bold mb-4">GitHub Profile Viewer</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <button onClick={searchUserByName} className="ml-2 bg-blue-500 text-white p-2">
          Search
        </button>
      </div>
      {userData ? (
        userData.map((user) => (
          <div key={user.id}>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{user.login}</h2>
            <p>{user.bio}</p>
            <p className="mt-2">
              Followers: {user.followers} | Following: {user.following}
            </p>
          </div>
        ))
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default App;

