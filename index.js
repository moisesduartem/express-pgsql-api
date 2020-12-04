const express = require("express");
const app = express();
const bodyParser = require("body-parser");
port = 3300;

const routes = require("./routes/routes");

app.listen(port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);