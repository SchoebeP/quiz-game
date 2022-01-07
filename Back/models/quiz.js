const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    category_id: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = Quiz = mongoose.model('quiz_list', quizSchema);