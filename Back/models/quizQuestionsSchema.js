const mongoose = require('mongoose')

const QuizQuestionsSchema = new mongoose.Schema({
    id:{
        type: Number,
        default: 1,
        required: true,
    },
    questions: {
        type: String,
        required: true,
        lowercase: true,
    },
    id_quiz:{
        type: Number,
        default: 1,
        required: true,
    },
    propositions: [String],
    reponse:{
        type: String,
        required: true,
        lowercase: true,
    },
    anecdote:{
        type: String,
        lowercase: true,
    }
});

module.exports = mongoose.model('quizQuestions', QuizQuestionsSchema)