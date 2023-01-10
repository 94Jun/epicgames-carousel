const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

app.use("/image", express.static("./upload"));
app.post("/api/customers", upload.single("image"), (req, res) => {
  const sql = "INSERT INTO customers VALUES (?, ?, ?, ?, ?, ?)";
  const id = Math.random().toString(32).slice(2)
  const image = "/image/" + req.file.filename;
  const name = req.body.name;
  const birthday = req.body.birthday;
  const gender = req.body.gender;
  const job = req.body.job;
  console.log(req.body);
  const params = [id, image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM customers", (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
