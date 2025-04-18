import React, { useState, useEffect } from "react";

function Main() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isdark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isdark ? 'dark-mode' : '';
  }, [isdark]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <div className={isdark ? 'dark-mode' : ''}>
      <div className="toggle-container">
        <button
          className="custom-toggle"
          onClick={() => setIsDark(!isdark)}
          aria-label="Dark mode toggle"
        >
          {isdark ? '🌙' : '🔆'}
        </button>
      </div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;