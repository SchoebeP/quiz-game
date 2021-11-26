const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 1,
        required: true,
    },
    name:{
        type: String, 
        required: true,
        lowercase: true,
    },
    id_user:{
        type: Number,
    },
    id_categorie:{
        type: Number,
        required: true,
        default: 1,
    },
    date:{
        type: Date,

    }
});

module.exports = mongoose.model('quizs', QuizSchema)