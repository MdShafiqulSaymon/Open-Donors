const mongoose = require("mongoose");
const Users = require("../models/Users");
const FindAllUser = async () => {
	const exist = await Users.find();
	return exist;
};
module.exports = FindAllUser;
