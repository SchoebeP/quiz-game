const mongoose = require('mongoose')

const CategorieSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: 1,
        required: true,
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
    }
});

module.exports = mongoose.model('categorie', CategorieSchema)