const express = require('express');
const connect = require('./configs/db');
const { register, login } = require('./controllers/auth.controller');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', register)
app.post('/login', login)

const port = 8080;

app.listen(port, async (req, res) => {
    try {
        await connect();
        console.log(`Server is running on port ${port}`);   
    } catch (error) {
        console.log(error.message);
    }
})