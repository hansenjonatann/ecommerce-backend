const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const uri = process.env.ATLAS_URI;

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our E-Commerce API");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port: ${PORT} `);
});

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology : true
// }).then().catch((err) => console.log('MongoDB connection failed: ', err.message))
