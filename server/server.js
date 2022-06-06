const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const dataController = require("./dataController");

app.get("/api/trips", dataController.getData);

const port = 3002;

app.listen(process.env.PORT || port);
