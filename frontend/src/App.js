import React, { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const addStudent = () => {
    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    })
    .then(res => res.json())
    .then(newStudent => setStudents([...students, newStudent]));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student App</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addStudent}>Add</button>
      <ul>
        {students.map(s => <li key={s.id}>{s.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
