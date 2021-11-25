const path = require('path');
const HOMEDIR = path.join(__dirname, '..');
const Quiz = require(path.join(HOMEDIR, 'models','quizSchema'));

const exposeServices = {
    findALLQuiz: async function(query) {
        try {
            const allQuiz = await Quiz.find().exec();
            return allQuiz;
        } catch (error) {
            return error;
        }
    },

    findOneQuiz: async function(query) {
        let {_id} = query;
        try {
            let quiz = await Quiz.findOne({_id}).exec();
            return quiz;
        } catch (error) {
            return error;
        }
    },

    saveOne: async function(data) {
        let oneQ = new Quiz(data);
    }
}