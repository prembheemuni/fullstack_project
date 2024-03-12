import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setUsers(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((each: any) => (
        <div>
          <h2>{each?.name}</h2>
          <h2>{each?.email}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
