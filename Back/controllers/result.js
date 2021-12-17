const ResultService = require('../services/result');

module.exports = {
    getResults: async function(req, res) {
        try {
            const results = await ResultService.getUserResults(req.session.user.id);
            return res.status(200).json(results);
        } catch (error) {
            return res.status(500).json({ error: true, message: error });
        }
    }
};