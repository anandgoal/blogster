const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();
const db = require('./config/db');

const userRoute = require('./routes/usersRoutes');

app.use(cors());
app.use(express.json()); // Parse JSON bodies

// define routes
app.get('/', (req, res) => {
    res.json({"message": "blogster - Explore Beyond Boundaries"});
});

// listing routing URL's
app.use('/user',)

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))