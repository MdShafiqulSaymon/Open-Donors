const mongoose = require("mongoose");
require("dotenv/config");
const connectDB = async () => {
	try {
		const URL = process.env.CONNECTION_DB;
		await mongoose
			.connect(URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => {
				console.log("Connected to MongoDB successfully!");
			})
			.catch((err) => {
				console.error(`Error Happend : ${err.message}`);
			});
	} catch (error) {
		console.error(`Error Happend : ${error.message}`);
	}
};
module.exports = connectDB;
