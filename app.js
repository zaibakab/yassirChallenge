const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:1111",
};
const app = express();
app.use(cors(corsOptions));



// parse requests of content-type - application/json
app.use(express.json());

// ORM initialization
const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// CRON Job: pollution of paris zone schedule
require("./jobs/getParisPollution.cron");

// routing
require("./routes/pollution.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`app is on port ${PORT}.`);
});
