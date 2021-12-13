const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quiz_id: {
        type: Number,
        required: true
    },
    propositions: [String],
    answer: {
        type: String,
        required: true
    },
    anecdote: {
        type: String
    }
});

module.exports = Question = mongoose.model('Question', questionSchema);