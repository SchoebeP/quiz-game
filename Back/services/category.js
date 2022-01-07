const Category = require('../models/category');

module.exports = {
    findCategories: async function() {
        try {
            return await Category.find();
        } catch (err) {
            return { error: true, message: err };
        }
    },

    findCategory: async function(categoryId) {
        try {
            return await Category.findOne({id: categoryId});
        } catch (err) {
            return { error: true, message: err };
        }
    },

    create: async function(name) {
        try {
            return await Category.create({ name });
        } catch (err) {
            return { error: true, message: err };
        }
    },

    update: async function(categoryId, name) {
        try {
            return await Category.findByIdAndUpdate(categoryId, { name });
        } catch (err) {
            return { error: true, message: err };
        }
    },

    delete: async function(categoryId) {
        try {
            return await Category.findByIdAndDelete(categoryId);
        } catch (err) {
            return { error: true, message: err };
        }
    }
};