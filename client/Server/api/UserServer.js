const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("../DataBase/Connection");
const {
	InsertData,
	checkIfExists,
	userValidation,
} = require("../DataBase/Data");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
// Data Base Connection
connectDB();
// Post API for Recive User data.
app.post("/completereg", async (req, res) => {
	const formData = req.body;
	try {
		const exist = await checkIfExists(formData.email, formData.phone);
		const existingUser = exist ? true : false;
		console.log("Exist: ", existingUser);
		console.log(exist);
		if (existingUser) {
			res
				.status(400)
				.json({ messege: "This Email or Phone Number Already Exist!" })
				.end();
		} else {
			InsertData(formData);
			res.status(200).json({ messege: "Data Received Successfully!" }).end();
		}
	} catch {
		res
			.status(400)
			.json({ messege: "Sending data are not correct formate and error" })
			.end();
	}
});
app.post("/signin", async (req, res) => {
	const signinData = req.body;
	console.log(signinData);
	const exist = await userValidation(signinData.email, signinData.password);
	const existingUser = exist ? true : false;
	if (existingUser) {
		res.status(200).json(exist).end();
	} else {
		res.status(400).json({ messege: "Invalid Email or Passord !" });
		console.log("Not user");
	}
});
app.listen(PORT, () => {
	console.log(`Server Is Running in PORT : ${PORT}`);
});
