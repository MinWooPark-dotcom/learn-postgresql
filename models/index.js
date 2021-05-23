"use strict";

const Sequelize = require("sequelize");

const env = process.env.NODE || "development";
const config = require("../config/config")[env];
const db = {};
// console.log("🚀 ~ file: index.js ~ line 7 ~ config", config["username"]);

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  config["database"],
  config["username"],
  config["password"],
  {
    host: "localhost",
    dialect: config["dialect"],
  }
);

db.sequelize = sequelize;

// const isConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// isConnection();

module.exports = db;
