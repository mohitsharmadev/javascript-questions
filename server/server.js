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

app.post("", (req, res) => {
  console.log(req.body);
  tasks.push({
    id: req.body.id,
    title: req.body.title,
    description: req.body.desc,
  });
  res.json(tasks);
});

app.get("", (req, res) => {
  res.json(tasks);
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  const result = tasks.find((item) => item.id === Number(req.params.id));
  console.log(result);
  res.json(result);
});

app.listen(3018, () => {
  console.log("server started");
});
