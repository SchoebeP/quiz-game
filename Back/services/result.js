const Result = require('../models/result');

module.exports = {
    getUserResults: async (userId) => {
        try {
            return await Result.find({ user: userId }).populate('quiz user');
        } catch (error) {
            return { error: true, message: error };
        }
    }
};