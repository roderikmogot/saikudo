const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = 3030;

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
  let allFood = req.body["allMenu"];

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFile("./foods.json", allFoodJSON, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

  console.log(allFood);
});

app.post("/add_minuman", async (req, res) => {
  let allFood = req.body["allMenu"];

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFile("./drinks.json", allFoodJSON, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

  console.log(allFood);
});

app.post("/add_packet", async (req, res) => {
  let allFood = req.body["allMenu"];

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFile("./packets.json", allFoodJSON, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

  console.log(allFood);
});

app.post("/add_cemilan", async (req, res) => {
  let allFood = req.body["allMenu"];

  // write menu to allFood
  let allFoodJSON = JSON.stringify(allFood);
  fs.writeFile("./extras.json", allFoodJSON, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

  console.log(allFood);
});

// Listen to port
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
