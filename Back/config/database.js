const mongoose = require('mongoose');
mongoose.pluralize(null)

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log('Database connection established'))
        .catch(err => console.log('Database connection error', err));
};

module.exports = databaseConnection;