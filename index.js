// const express = require('express');
// const { resolve } = require('path');
// const router = require('./controllers/routes');

// const app = express();
// const port = 3010;

// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(resolve(__dirname, 'pages/index.html'));
// });
// app.use('/api', router);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Optional if using express.json()

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // This will parse JSON requests, including `req.body`
app.use(cors()); // CORS for cross-origin requests

// Your routes (imported)
const userRoutes = require('./controllers/routes');
app.use('/api', userRoutes); // Assuming this is the correct route

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
