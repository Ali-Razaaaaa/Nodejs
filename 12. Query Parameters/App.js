import express from 'express';

const app = express();

// Dummy users data
const users = [
  { id: 1, name: 'Ali', age: 25 },
  { id: 2, name: 'Sara', age: 30 },
  { id: 3, name: 'Ahmed', age: 25 },
];

app.get('/users', (req, res) => {
  const age = req.query.age;

  if (age) {
    
    const filteredUsers = users.filter(user => user.age == age);
    
    res.send(filteredUsers);
  } else {
    res.send(users);
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

