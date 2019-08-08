const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('worked');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  let newTask = req.body;
  tasks.push(newTask);
  res.json(tasks);
});

app.put('/tasks/title/:myId', (req, res) => {
  let newTitle = req.body.title;
  let id = parseInt(req.params.myId);
  tasks.map(t => {
    if(t.id === id) {
        t.title = newTitle;
    }
    return t;
  });
  res.json(tasks);
});

app.delete('/tasks/title/:myId', (req, res) => {
  let id = parseInt(req.params.myId);
  tasks.map(elem => {
    if(elem.id === id) {
        delete elem.title;
    }
    return elem;
  });
  res.json(tasks);
});

const PORT = 9000;
app.listen(PORT, () => console.log(`Your server is listening to ${PORT}`));

const tasks = [
  {
    id: 1,
    title: "Download Zoom",
    isCompleted: false
  },
  {
    id: 2,
    title: "Eat Fried Chicken",
    isCompleted: true
  },
  {
    id: 3,
    title: "Play Games",
    isCompleted: false
  },
  {
    id: 4,
    title: "Go for Shopping",
    isCompleted: true
  },
  {
    id: 5,
    title: "Watch Movie",
    isCompleted: false
  }
]
