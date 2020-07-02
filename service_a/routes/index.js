var express = require("express");
var router = express.Router();
var axios = require("axios");
var mysql = require("mysql");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

axios.get("http://service_b:3000").then((response) => {
  console.log(response.data);
});

axios.get("http://service_c:3000").then((response) => {
  console.log(response.data);
});

const redis = require("redis");
const client = redis.createClient({
  host: "service_a_redis",
});

client.on("error", function (error) {
  console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);

var connection = mysql.createConnection({
  host: "service_a_db",
  user: "user",
  password: "pass",
  database: "db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) {
    console.log("ERROR 1:", error);
  } else {
    console.log("The solution is: ", results[0].solution);
  }
});

connection.end();

module.exports = router;
