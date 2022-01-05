const QuizService = require('../services/quiz');
const QuestionService = require('../services/question');
const ResultService = require('../services/result');

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
    },

    submitResults: async function(req, res) {
        try {
            const quizId = req.params.id || {};
            const quiz = await QuizService.findQuiz(quizId);
            if (!quiz) {
                return res.status(404).json({ error: true, message: 'This quiz does not exist.' });
            }

            const questions = await QuestionService.findListOfQuestionsById(quizId);
            if (!questions) {
                return res.status(404).json({ error: true, message: 'This quiz does not contain any questions.' });
            }

            let { results } = req.body;
            results = JSON.parse(results);

            let score = 0;
            questions.forEach((question, index) => {
                if (results[index] === question.answer) score++;
            });

            const response = await ResultService.submitResults(req.session.user.id, quiz._id, score);
            if (!response || response.error) {
                return res.status(500).json({ error: true, message: 'An error occured during the submission.' });
            }

            return res.status(200).json({ error: false, message: 'Submission successfuly sent !' });
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }
};