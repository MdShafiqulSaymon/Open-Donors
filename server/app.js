const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
//Import Custome Library
const CONNECTION_DB = require("./dataBase/Connection");
require("dotenv/config");
//middleware
app.use(bodyParser.json());
app.use(cors());
module.exports = app;
//Routes
const UserReg = require("./routes/UserReg");
const UserLogIn = require("./routes/UserLogIn");
const Service = require("./routes/ServiceAllUserInfo");
const EditUserInfo = require("./routes/EditUserInfo");
app.use("/completereg", UserReg);

app.use("/signin", UserLogIn);
app.use("/services", Service);
app.use("/edituser", EditUserInfo);

// Database Connetion
CONNECTION_DB();
