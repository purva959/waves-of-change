const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to accept JSON in the body of requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB database connection established successfully"))
.catch(err => console.error("MongoDB connection error:", err));

// API Routes (We will add these soon)
// app.use('/api/users', require('./routes/users'));

app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});