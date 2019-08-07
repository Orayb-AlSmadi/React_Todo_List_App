// server: nodeJs file, expressJs
const express = require('express');
const app = express(); // instead of parse body

const path = require('path'); // for react
const cors = require('cors')  // for react

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

// just for checking 
app.get('/', (req, res) => {
  res.send('<h1>The server works</h1>');
});

app.get('/1', (req, res) => {
  res.send(req.url);
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
  console.log('hi')
});

//get spesific task by id
app.get('/tasks/:id', (req, res) => {
  console.log(req.originalUrl)
  console.log(req.url); // same as the upper
  let reqestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.filter(elem => {
    return elem.id === reqestedId;
  });
  res.json(result);
});

//post new task 
app.post('/tasks', (req, res) => {//    const newdata = {
  //     id: req.body.id,
  //     title: req.body.title,
  //     isCompleted: req.body.isCompleted
  //   }
  // tasks.push(newdata);
  tasks.push(req.body);
  console.log(req.body)
  res.json(tasks)
})

//delete task 
app.delete('/tasks/:id', (req, res) => {
  let delid = parseInt((req.originalUrl.slice(7)), 10);
  console.log(delid)
  tasks.forEach((ele, index) => {
    console.log(ele.id)
    if (delid === ele.id)
      tasks.splice(index, 1)
  })
  res.json(tasks);
});

//put 
app.put('/tasks/:id', (req, res) => {
  console.log(req.originalUrl)
  console.log(req.url); // same as the upper
  let reqestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.filter(elem => {
    return elem.id === reqestedId;
  });
  res.json(result);
});



const PORT = 4000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));

const tasks = [
  {
    id: 1,
    title: "Download Zoom",
    isCompleted: true
  },
  {
    id: 2,
    title: "Eat Fried Chicken",
    isCompleted: true
  },
  {
    id: 3,
    title: "Play Games",
    isCompleted: true
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

