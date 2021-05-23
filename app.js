const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
require("dotenv").config();

app.set("port", 3000);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(app.get("port"), () => {
  console.log("listening 3000");
});

// !Connecting to a database

const database = process.env.DATABASE;
const username = process.env.USER;
const password = process.env.PASSWORD;

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

const isConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

isConnection();
