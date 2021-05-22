const express = require("express");
const app = express();
const { Pool, Client } = require("pg");
require("dotenv").config();

app.set("port", 3000);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(app.get("port"), () => {
  console.log("listening 3000");
});

const client = new Client({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

function GetUserList() {
  client.connect();
  client.query("SELECT * FROM users", (err, res) => {
    console.log(res);
    client.end();
  });
}

module.exports = { getUserList: GetUserList };
