import express, { urlencoded } from "express";
import { readFile, writeFile } from "fs";

import bodyParser from "body-parser";

var jsonParser = bodyParser.json();

const app = express();
//middleware
app.use(urlencoded({ extended: true }));
app.use(jsonParser);

app.post("/", (req, res) => {
  readFile("./data.json", (err, data) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log(req.body);
      const isDataExist = !!data.length;
      const savedData = isDataExist ? JSON.parse(data) : [];
      const largestId = savedData.length + 1;
      savedData.push({
        id: largestId,
        description: req.body.description,
        title: req.body.title,
      });
      writeFile("./data.json", JSON.stringify(savedData), (err) => {
        if (err) {
          res.json("Unable to insert!");
        }
      });
      res.json(savedData);
    }
  });
});

app.get("/", (req, res) => {
  readFile("./data.json", (err, data) => {
    if (err) {
      res.json({ message: "unable to get tasks" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.get("/:id", (req, res) => {
  readFile("./data.json", (err, data) => {
    if (err) {
      res.json("unable to get tasks");
    } else {
      const d = JSON.parse(data);
      const task = d.filter(function (ele) {
        return +req.params.id === ele.id;
      });
      if (task.length) {
        res.json(task[0]);
      }
      res.json(`No Task with id ${req.params.id}`);
    }
  });
});
app.patch("/:id", (req, res) => {
  readFile("./data.json", (err, data) => {
    const id = +req.params.id;
    console.log(id);
    if (err) {
      console.log("errors", err);
    } else {
      const b = data.length ? JSON.parse(data) : [];
      const c = b.findIndex((el) => el.id === id);
      if (c === -1) {
        res.json(`Task with id ${req.params.id} does not exist!`);
      }
      if (req.body.title) {
        b[c]["title"] = req.body.title;
      }
      if (req.body.description) {
        b[c]["description"] = req.body.description;
      }
      writeFile("./data.json", JSON.stringify(b), (err) => {
        if (err) {
          res.json("Enable to update!");
        }
      });
      res.json(b[c]);
    }
  });
});

app.put("/:id", (req, res) => {
  readFile("./data.json", (err, data) => {
    const id = +req.params.id;
    console.log(id);
    if (err) {
      console.log("errors", err);
    } else {
      const copy = data;
      const a = data.length ? JSON.parse(data) : [];
      const b = a.findIndex((el) => el.id === id);
      console.log(a);
      console.log(b);
      console.log(req.body);
      if (req.body.title) {
        a[b]["title"] = req.body.title;
      }
      if (req.body.description) {
        a[b]["description"] = req.body.description;
      }
      writeFile("./data.json", JSON.stringify(a), (err) => {
        if (err) {
          res.json("Enable to update!");
          writeFile("./data.json", data, (err) => {
            console.log("nothing");
          });
        }
      });
      res.json(a[b]);
    }
  });
});
app.delete("/:id", (req, res) => {
  readFile("./data.json", (err, data) => {
    if (err) {
      console.log("errors", err);
    } else {
      const a = data.length ? JSON.parse(data) : [];
    }
  });
  const index = tasks.findIndex((item) => item.id === Number(req.params.id));

  if (index == -1) {
    res.send("Taks with that id not found");
  }
  const deletedTask = tasks.splice(index, 1);
  res.send(deletedTask);
});

app.listen(3018, () => {
  console.log("server started");
});
