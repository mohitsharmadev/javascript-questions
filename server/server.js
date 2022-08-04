const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Mohit sharma");
});
app.listen(3019, () => {
  console.log("server started");
});
