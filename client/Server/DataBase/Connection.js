const mongoose = require("mongoose");
const connectDB = async () => {
	try {
		const URL =
			"mongodb+srv://open--donors:mongodb@cluster0.serdoxn.mongodb.net/open--donors?retryWrites=true&w=majority";
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
