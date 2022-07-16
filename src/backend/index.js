const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = 4000;

const app = express();

// Built-in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// First route
app.get("/", cors(), async (req, res) => {
  res.send("Backend!");
});

app.post("/add_makanan", async (req, res) => {
  let { allFood } = req.body;

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFileSync("./foods.json", allFoodJSON, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Data written to './foods.json'");
  });

  console.log(allFood);
});

app.post("/add_minuman", async (req, res) => {
  let { allFood } = req.body;

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFileSync("./drinks.json", allFoodJSON, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Data written to './drinks.json'");
  });

  console.log(allFood);
});

app.post("/add_packet", async (req, res) => {
  let { allFood } = req.body;

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFileSync("./packets.json", allFoodJSON, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Data written to './packets.json'");
  });

  console.log(allFood);
});

app.post("/add_cemilan", async (req, res) => {
  let { allFood } = req.body;

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFileSync("./extras.json", allFoodJSON, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Data written to './extras.json'");
  });

  console.log(allFood);
});

// Listen to port
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
