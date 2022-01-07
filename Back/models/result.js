const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz_list'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Result = mongoose.model('results', resultSchema);