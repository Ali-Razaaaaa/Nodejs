import React from 'react'
import {useState } from 'react';
function Addstudent() {
    
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [serverResponse, setResponse] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata),
    })
      .then(res => res.json())
      .then(data => setResponse(data))
      .catch(error => {
        console.error('Error:', error);
        setResponse({ data: 'Error Sending' });
      });

    setformdata({ name: '', email: '', age: '' });

  };

  return (
    <div>
        <h1>Add Students</h1>
        <form style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }} onSubmit={handlesubmit}>
          <input placeholder='Enter Name' value={formdata.name} onChange={(e) => setformdata({ ...formdata, name: e.target.value })}></input>
          <input placeholder='Enter Email' value={formdata.email} onChange={(e) => setformdata({ ...formdata, email: e.target.value })}></input>
          <input placeholder='Enter Age' value={formdata.age} onChange={(e) => setformdata({ ...formdata, age: e.target.value })}></input>
          <button>Add Student</button>
        </form>
        <div style={{ marginTop: '30px' }}>
          <h2>{serverResponse?.data}</h2>
        </div>
      </div>
  );
}

export default Addstudent