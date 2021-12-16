const Questions = require('../models/question');

module.exports = {
    findQuestions: async function() {
        try {
            return await Questions.find();
        } catch (err) {
            return { error: true, message: err };
        }
    },

    findQuestion: async function(QuestionId) {
        try {
            let reply = await Questions.findOne({id: QuestionId});
            console.log(reply)
            return await Questions.findOne({id: QuestionId});
        } catch (err) {
            return { error: true, message: err };
        }
    },

    create: async function(name, userId, categoryId,propositions ,answer , anecdote) {
        try {
            return await Questions.create({ name, user_id: userId, quiz_id: categoryId ,propositions: propositions ,answer:answer, anecdote:anecdote});
        } catch (err) {
            return { error: true, message: err };
        }
    },

    update: async function(QuestionsId, data) {
        try {
            const QuestionsData = {
                name: data.name,
                user_id: data.user_id,
                category_id: data.category_id,
                propositions: data.propositions,
                answer: data.answer,
                anecdote: data.anecdote
            };

            return await Questions.findByIdAndUpdate(QuestionsId, QuestionsData);
        } catch (err) {
            return { error: true, message: err };
        }
    },

    delete: async function(QuestionId) {
        try {
            return await Questions.findByIdAndDelete(QuestionId);
        } catch (err) {
            return { error: true, message: err };
        }
    }
};