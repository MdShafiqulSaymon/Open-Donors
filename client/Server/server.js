const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 5000; // Use the same port as your React app
const cors = require("cors");
app.use(express.json());
app.use(cors());

// MongoDb Connection
const uri =
	"mongodb+srv://SAYMON:mongodb@cluster1.qw8xkk2.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Connect to the MongoDB Atlas cluster
async function connectToDB() {
	try {
		await client.connect();
		console.log("Connected to MongoDB Atlas");
	} catch (error) {
		console.error("Error connecting to MongoDB Atlas:", error);
	}
}

// Call the connectToDB function to establish the connection
connectToDB();

// Inserting data to MongoDB DataBase.
let hasInsert = true;
const insertDocument = async (collectionName, document) => {
	try {
		const database = client.db("Open-Donors");
		const collection = database.collection(collectionName);

		// Create the collection if it doesn't exist
		if (!(await collectionExists(collectionName, database))) {
			await database.createCollection(collectionName);
			console.log("Collection created:", collectionName);
		}

		// Check if email or phone number already exists in the collection
		const existingRecord = await collection.findOne({
			$or: [{ email: document.email }, { phone: document.phone }],
		});

		if (existingRecord) {
			console.log("Email or phone number already exists. Displaying alert...");
			// Display an alert or handle the situation as needed
			hasInsert = false;
			return;
		}
		const result = await collection.insertOne(document);
		console.log("Document inserted:", result.insertedId);
	} catch (error) {
		console.error("Error inserting document:", error);
	}
};

// Function to check if a collection exists
async function collectionExists(collectionName, database) {
	const collections = await database.listCollections().toArray();
	return collections.some((collection) => collection.name === collectionName);
}

// Usage: Call the insertDocument function with the collection name and the document to insert

app.post("/signup", (req, res) => {
	const formData = req.body;
	//console.log("Form data received on the server:", formData);
	insertDocument("users", formData);
	console.log(hasInsert);
	if (!hasInsert)
		res.status(400).json({
			message: "Email or phone number already exists. Displaying alert...",
		});
	else {
		res.json({ message: "Form data received on the server" });
		console.log("Dhur . ki j hocche");
	}
});
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
