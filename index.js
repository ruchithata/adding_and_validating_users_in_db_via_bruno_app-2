const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // This will parse JSON requests, including `req.body`
app.use(cors()); // CORS for cross-origin requests

// Your routes (imported)
const userRoutes = require('./controllers/routes');
const connectDB = require('./db');
app.use('/api', userRoutes); // Assuming this is the correct route

const PORT = process.env.PORT || 3010;
const uri = "mongodb+srv://ruchithata83:ruchitha@signup.9jubx.mongodb.net/?retryWrites=true&w=majority&appName=signup"

connectDB(uri);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
