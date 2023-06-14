import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError("Error fetching users"));
  }, []);

  return (
    <>
      <h1>Fetch User list</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export { Users };
