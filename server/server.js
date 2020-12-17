const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const login = require('./routes/login');
const signup = require('./routes/signup');
const auth = require('./middleware/auth');
const InitiateMongoServer = require('./config/mongo_db');
const path = require('path');

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('/', (req, res) => {
  res.json({ message: 'API Working' });
});

app.get('/checkToken', auth, function (req, res) {
  res.sendStatus(200);
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use('/api/user', login);
app.use('/api/user', signup);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
