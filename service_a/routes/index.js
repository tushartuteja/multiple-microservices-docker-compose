var express = require("express");
var router = express.Router();
var axios = require("axios");

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

module.exports = router;
