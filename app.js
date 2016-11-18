const express = require("express");
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser")
const homeRoute = require("./routes/index")
const tasksRoute = require("./routes/tasks")

const isDev = !("NODE_ENV" in process.env && require("dotenv").config().config() && true);

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,'public')));

app.use(logger(isDev ? "div" : "common"));

app.use(bodyParser.json());


app.listen(PORT, () => console.log("server is running @ ", PORT));

app.use((err, req, res , next) =>{
  console.error(err,next);
  res.status(500).send("something broke!");
});

app.use("/", homeRoute);
app.use("/tasks", tasksRoute);
