const express = require("express");
const routes = express.Router();
const User = require("../models/Users");
const FindAllUser = require("../controllers/FindAllUser");
routes.get("/", async (req, res) => {
	const allUser = await FindAllUser();
	res.status(200).json(allUser);
});
module.exports = routes;
