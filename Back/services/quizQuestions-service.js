const path = require('path');
const HOMEDIR = path.join(__dirname, '..');
const QuizQuestions = require(path.join(HOMEDIR, 'models','quizQuestionsSchema'));

const quizServices = {
    findAllQuizQuestions: async function(query) {
        try {
            const allQuizQuestions = await QuizQuestions.find().exec();
            return allQuizQuestions;
        } catch (error) {
            res.status(500).send({ message: err.message || 'probleme avec la recuperation des quizz' });
        }
    },

    findOneQuizQuestion: async function(id) {
        try {
            let quizQuestions = await QuizQuestions.findOne({id}).exec();
            return quizQuestions;
        } catch (error) {
            return error;
        }
    },

    findAllQuestion: async function(id_quiz) {
        try {
            let quizQuestions = await QuizQuestions.find({id_quiz}).limit(10).exec();
            return quizQuestions;
        } catch (error) {
            return error;
        }
    },


    saveOne: async function(data) {
        let oneQuizQ = new QuizQuestions(data);
        try{
            let NewQuizQuest = await oneQuizQ.save();
            return NewQuizQuest;
        }catch (error) {
            return error;
        }
    },

    deleteOneQuizQuest: async function(id){
        try {
            deleteOneQuiz =  await QuizQuestions.findByIdAndRemove({id})
            return deleteOneQuiz;
        } catch (error) {
            res.status(500).send({ message: error.message || 'probleme avec la supression' });
        }
    }
}

module.exports = quizServices;