const path = require('path');
const HOMEDIR = path.join(__dirname, '..');
const Quiz = require(path.join(HOMEDIR, 'models','quizSchema'));

const quizServices = {
    findAllQuiz: async function(query) {
        try {
            const allQuiz = await Quiz.find().exec();
            return allQuiz;
        } catch (error) {
            res.status(500).send({ message: err.message || 'probleme avec la recuperation des quizz' });
        }
    },

    findOneQuiz: async function(_id) {
        try {
            let quiz = await Quiz.findOne({_id}).exec();
            return quiz;
        } catch (error) {
            return error;
        }
    },

    saveOne: async function(data) {
        let oneQ = new Quiz(data);
        try{
            let NewQuiz = await oneQ.save();
            return NewQuiz;
        }catch (error) {
            return error;
        }
    },

    deleteOneQuiz: async function(_id){
        try {
            deleteOneQuiz =  await Quiz.findByIdAndRemove({_id})
            return deleteOneQuiz;
        } catch (error) {
            res.status(500).send({ message: error.message || 'probleme avec la supression' });
        }
    }
}

module.exports = quizServices;