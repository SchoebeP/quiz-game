const QuestionService = require('../services/question');

module.exports = {
    findQuestions: async function(req, res) {
        try {
            const questions = await QuestionService.findQuestions();
            if (!questions) {
                return res.status(404).json('There are no questions yet.');
            }

            return res.json(questions);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    findQuestion: async function (req, res) {
        try {
            const questionId = req.params.id || {};
            const question = await QuestionService.findQuestion(questionId);
            if (!question) {
                return res.status(404).json('This question does not exist.');
            }

            return res.json(question);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    create: async function(req, res) {
        try {
            const name = req.body.name || '';
            const question = await QuestionService.create(name);

            return res.json(question);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    update: async function(req, res) {
        try {
            const data = {};
            data.id = req.params.id || {};
            data.name = req.body.name || '';

            const question = await QuestionService.update(data.id, data.name);
            return res.json(question);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    delete: async function(req, res) {
        try {
            const questionId = req.params.id || {};
            const response = await QuestionService.delete(questionId);

            return res.json(response);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }
};