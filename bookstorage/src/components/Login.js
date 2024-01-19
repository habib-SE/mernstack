// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5555/books', { username, password });
      console.log(response.data.token); // Store the token in your state or context
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <div className="max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">Username:</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
