const express = require('express')
const app = express()
const categorie = require('./models/categorie.json')

/**
 * Import MongoClient & connexion à la DB
 */
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'FullStackApi';
let db
 
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

app.use(express.json())

app.get('/categorie', (req,res) => {
    res.status(200).json(categorie)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})