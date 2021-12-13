const QuizService = require('../services/quiz');

module.exports = {
    findQuizzes: async function(req, res) {
        try {
            const quizzes = await QuizService.findQuizzes();
            if (!quizzes) {
                return res.status(404).json('There are no quizzes yet.');
            }

            return res.json(quizzes);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    findQuiz: async function (req, res) {
        try {
            const quizId = req.params.id || {};
            const quiz = await QuizService.findQuiz(quizId);
            if (!quiz) {
                return res.status(404).json('This quiz does not exist.');
            }

            return res.json(quiz);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    create: async function(req, res) {
        try {
            const name = req.body.name || '';
            const userId = 1;
            const categoryId = req.body.category_id;

            const quiz = await QuizService.create(name, userId, categoryId);
            return res.json(quiz);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    update: async function(req, res) {
        try {
            const quizId = req.params.id || {};

            const data = {};
            data.name = req.body.name || '';
            data.user_id = 1;
            data.category_id = req.body.category_id;

            const quiz = await QuizService.update(quizId, data);
            return res.json(quiz);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    delete: async function(req, res) {
        try {
            const quizId = req.params.id || {};
            const response = await QuizService.delete(quizId);

            return res.json(response);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }
};