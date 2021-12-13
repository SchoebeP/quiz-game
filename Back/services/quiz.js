const Quiz = require('../models/quiz');

module.exports = {
    findQuizzes: async function() {
        try {
            return await Quiz.find();
        } catch (err) {
            return { error: true, message: err };
        }
    },

    findQuiz: async function(quizId) {
        try {
            return await Quiz.findById(quizId);
        } catch (err) {
            return { error: true, message: err };
        }
    },

    create: async function(name, userId, categoryId, date) {
        try {
            return await Quiz.create({ name, user_id: userId, category_id: categoryId, date });
        } catch (err) {
            return { error: true, message: err };
        }
    },

    update: async function(quizId, data) {
        try {
            const quizData = {
                name: data.name,
                user_id: data.user_id,
                category_id: data.category_id
            };

            return await Quiz.findByIdAndUpdate(quizId, quizData);
        } catch (err) {
            return { error: true, message: err };
        }
    },

    delete: async function(quizId) {
        try {
            return await Quiz.findByIdAndDelete(quizId);
        } catch (err) {
            return { error: true, message: err };
        }
    }
};