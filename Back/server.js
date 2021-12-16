require('dotenv').config();

const express = require('express');
const session = require('express-session');
const bodyParser =  require('body-parser');
const cors = require('cors');
const databaseConnection = require('./config/database');
const jwt = require('./middleware/jwt');
const errorHandler = require('./middleware/errorHandler');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(jwt());

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true
}));

// database connection
databaseConnection();

// routes
app.use('/categories', require('./routes/category.routes'));
app.use('/quiz', require('./routes/quiz.routes'))
app.use('/question', require('./routes/question.routes'));
app.use('/users', require('./routes/user.routes'));

app.use(errorHandler);

const port = process.env.APP_PORT || 3000;
app.listen(port,err => {
    if (err) console.log(err);
    else console.log(`connected on port ${port}`);
});