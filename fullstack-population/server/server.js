const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const data = require("./data");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Testing Backend");
});

app.get("/population", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
