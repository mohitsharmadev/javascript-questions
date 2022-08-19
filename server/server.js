const express = require("express");
const app = express();
const tasks = [
  {
    id: 599,
    title: "nest",
    description: "server.js and express.js",
  },
  {
    id: 593,
    title: "nest",
    description: "server.js and express.js",
  },
  {
    id: 592,
    title: "nest",
    description: "server.js and express.js",
  },
  {
    id: 591,
    title: "nest",
    description: "server.js and express.js",
  },
];
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  tasks.push({
    id: req.body.id,
    title: req.body.title,
    description: req.body.desc,
  });
  res.json(tasks);
});

app.get("/", (req, res) => {
  res.json(tasks);
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  const result = tasks.find((item) => item.id === Number(req.params.id));
  console.log(result);
  res.json(result);
});
app.patch("/:id", (req, res) => {
  // find index
  const index = tasks.findIndex((item) => item.id === Number(req.params.id));

  (tasks[index].title = req.body.title),
    (tasks[index].description = req.body.desc),
    console.log(index);
  // get details from body
  tasks[index].description = "";
  //update tasks array at index found
});
app.put("", (req, res) => {
  const index = tasks.findIndex((item) => item.id === Number(req.params.id));
});

app.listen(3018, () => {
  console.log("server started");
});
