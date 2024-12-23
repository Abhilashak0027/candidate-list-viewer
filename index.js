const express = require('express');
const cors = require('cors');  
const app = express();
const port = 3002;

app.use(cors());  

const candidates = [
  { id: 1, name: 'Alice', skills: 'React, Node.js', experience: 3 },
  { id: 2, name: 'Bob', skills: 'Java, Spring Boot', experience: 5 },
  { id: 3, name: 'Charlie', skills: 'Python, Django', experience: 4 },
  { id: 4, name: 'David', skills: 'JavaScript, Node.js', experience: 2 },
  { id: 5, name: 'Eva', skills: 'C++, Python', experience: 6 },
  { id: 6, name: 'Frank', skills: 'Java, React', experience: 3 },
  { id: 7, name: 'Grace', skills: 'PHP, MySQL', experience: 4 },
  { id: 8, name: 'Hank', skills: 'HTML, CSS, JavaScript', experience: 2 },
  { id: 9, name: 'Ivy', skills: 'Ruby, Rails', experience: 4 },
  { id: 10, name: 'Jack', skills: 'Swift, Objective-C', experience: 5 }
];


app.get('/', (req, res) => {
  res.send('Welcome to the Candidate List API');
});

app.get('/api/candidates', (req, res) => {
  res.json(candidates);  
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
