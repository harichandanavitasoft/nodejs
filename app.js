const express = require('express');
const mongoose = require("mongoose");
const adminrouting = require('./adminrouting');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
port = 8000;
app.listen(port, (req, res) => {
    console.log("listening port 8000");
})
url = "mongodb://localhost:27017/nodeproject"
mongoose
    .connect(url).then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log("database not connected");
    })
app.use('/', adminrouting)