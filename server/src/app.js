const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const planetRouter = require("./routes/planets/planet.router");
const launchesRouter = require("./routes/launches/launches.router");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(planetRouter);
app.use("/launches", launchesRouter);

module.exports = app;
