const CategoryService = require('../services/category');

module.exports = {
    findCategories: async function(req, res) {
        try {
            const categories = await CategoryService.findCategories();
            if (!categories) {
                return res.status(404).json('There are no categories yet.');
            }

            return res.json(categories);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    findCategory: async function (req, res) {
        try {
            const categoryId = req.params.id || {};
            const category = await CategoryService.findCategory(categoryId);
            if (!category) {
                return res.status(404).json('This category does not exist.');
            }

            return res.json(category);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    create: async function(req, res) {
        try {
            const name = req.body.name || '';
            const category = await CategoryService.create(name);

            return res.json(category);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    update: async function(req, res) {
        try {
            const data = {};
            data.id = req.params.id || {};
            data.name = req.body.name || '';

            const category = await CategoryService.update(data.id, data.name);
            return res.json(category);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    },

    delete: async function(req, res) {
        try {
            const categoryId = req.params.id || {};
            const response = await CategoryService.delete(categoryId);

            return res.json(response);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }
};