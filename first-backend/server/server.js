const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Data = require("./data.model");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.DB_URI)
  .then((con) => {
    console.log(`Connected to database: ${con.connection.host}`);
  })
  .catch((err) => {
    console.log(`Cannot connect to database: ${err}`);
  });

app.get("/", (req, res) => {
  res.send("Testing Backend");
});

app.get("/population", async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (err) {
    console.log(err);
  }
});

app.get("/population/:_id", async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const singleData = await Data.findById(req.params._id);
    if (!singleData) {
      return res.send("Data item not found!");
    }
    res.json(singleData);
  } catch (err) {
    console.log(err);
  }
});

app.put("/population/:_id", async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleData = await Data.findById(req.params._id);
    if (!singleData) {
      return res.send("Data item not found!");
    }
    singleData = await Data.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.json(singleData);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/population/:_id", async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    let singleData = await Data.findById(req.params._id);
    if (!singleData) {
      return res.send("Data item not found!");
    }
    Data.deleteOne({ _id: req.params._id }).then(() => {
      res.json("Data item deleted successfully!");
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/population", async (req, res, next) => {
  res.header("Content-Type", "application/json");
  try {
    const data = new Data({
      "ID Nation": req.body["ID Nation"],
      Nation: req.body.Nation,
      "ID Year": req.body["ID Year"],
      Year: req.body.Year,
      Population: req.body.Population,
      "Slug Nation": req.body["Slug Nation"],
    });
    const db = await data.save();
    res.send("Got a POST request");
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
