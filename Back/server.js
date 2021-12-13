require('dotenv').config();

const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');
const databaseConnection = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
databaseConnection();

// routes
app.use('/categories', require('./routes/category.routes'));
app.use('/quiz', require('./routes/quiz.routes'))
app.use('/question', require('./routes/question.routes'));

const port = process.env.APP_PORT || 3000;
app.listen(port,err => {
    if (err) console.log(err);
    else console.log(`connected on port ${port}`);
});