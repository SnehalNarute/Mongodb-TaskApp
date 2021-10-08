const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const app = express();

const PORT = process.env.PORT || 3000;

dotenv.config({ path: './.env' });

// conenction to mongodb
const DB = process.env.DATABASE;

mongoose
	.connect(DB)
	.then(() => {
		console.log('connection successful');
	})
	.catch((err) => {
		console.log(err);
	});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


// routes
app.use(require("./routes/routes"))
app.use(require("./routes/task"))


// server configurations....
app.listen(3000, () => console.log(`Server started listening on port: ${PORT}`));