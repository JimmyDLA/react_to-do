const home = require("express").Router();

home.get("/", (res, req) => res.json("home"));


home.post("/")

module.exports = home;
