const UserService = require('../services/user');

module.exports ={
    authenticate: async function(req, res) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const user = await UserService.authenticate(username, password);

            if (!user) {
                return res.status(400).json({ error: true, message: 'Username or password is incorrect' });
            }

            req.session.user = user;
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({error: error})
        }
    },

    register: async function(req, res) {
        try {
            const user = await UserService.create(req.body);

            req.session.user = user;
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({error: error})    
        }
    },

    getAll: async function(req, res) {
        try {
            const users = await UserService.getAll();
            if(!users){
                return res.status(404).json({message: 'ther are no users'})
            }
            return res.json(users)
        } catch (error) {
            return res.status(500).json({error: error})
        }
    },

    getById: async function(req, res) {
        try {
            const user_id = req.params.id || {};
            const user = await UserService.getById(user_id);
            if(!user){
                return res.status(404).json({message: 'this user does not exist.'})
            }
            return res.json(user)
        } catch (error) {
            return res.status(500).json({error: error})
        }
    },

    update: async function(req, res) {
        try {
            const data = {};
            data.id = req.params.id || {};
            data.name = req.body.name || '';

            const user = await UserService.update(data.id, data.name);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({error: error})
        }
    },

    delete: async function(req, res) {
        try {
            const user_id = req.params.id || {};
            const response = await UserService.delete(user_id);

            return res.json(response);
        } catch (error) {
            return res.status(500).json({error: error})
        }
    }
}