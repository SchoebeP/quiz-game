const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require('./config/db');

const app = express();


//middleware

app.use(express.json());
app.use(cors());



/**
 * Import mongoose & connexion à la DB
 */
connectDB() 


// routes
app.use("/categories", require('./routes/CategorieRoute'));
app.use("/quiz", require('./routes/QuizRoute'))

//run server

const port = process.env.PORT||5000
app.listen( port,err =>err?console.log(err):console.log(`connected on port ${port}`) );