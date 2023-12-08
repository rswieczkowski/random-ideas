const express = require('express');
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'Some random text',
    tag: 'Technology',
    username: 'Tony Stark',
    date: '2023-05-12',
  },
  {
    id: 2,
    text: 'Some random text 2',
    tag: 'Invention',
    username: 'Steven Rogers',
    date: '2023-05-16',
  },
  {
    id: 3,
    text: 'Some random text 3',
    tag: 'Software',
    username: 'Bruce Banner',
    date: '2023-05-16',
  },
];

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to RandomIdeas API' });
});

// Get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource nof found' });
  }
  res.json({ success: true, data: idea });
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
