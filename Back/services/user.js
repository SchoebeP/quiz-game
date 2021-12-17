const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {
   authenticate: async function(username, password){
       try {
        const user = await User.findOne({ username });

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ sub: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' });
            return { ...user.toJSON(), token };
        }
       } catch (error) {
            return { error: true, message: error };
       }
   },

   getAll: async function(){
       try {
           return await User.find();
       } catch (error) {
           return { error: true, message: error };
       }
   },

   getById: async function(id){
       try {
           return await User.findById(id);
       } catch (error) {
           return { error: true, message: error };
       }
   },

   create: async function(requestBody) {
       try {
           let { fullname, username, email, password } = requestBody;

           if (await User.findOne({ username })) {
               return { error: true, message: 'Username already taken' };
           }
           password = bcrypt.hashSync(password, 10);

           const user = await User.create({
               fullname, username, email, password
           });

           const token = jwt.sign({ sub: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' });
           return { ...user.toJSON(), token };
       } catch (error) {
           return { error: true, message: error };
       }
   },

   update: async function(id,userParam){
       try {
           const user = await User.findById(id);
           if(!user) throw 'User not found';
           if(user.username !== userParam.username && await User.findOne({username: userParam.username})){
               throw 'Username "'+ userParam.username + '"is alreday taken';
           }


           if(userParam.password){
               userParam.password = bcrypt.hashSync(userParam.password, 10);
           }

           Object.assign(user, userParam);

           await user.save();
       } catch (error) {
           return { error: true, message: error };
       }
   },

   delete: async function(id){
       try {
           await User.findByIdAndRemove(id);
       } catch (error) {
           return { error: true, message: error };
       }
   }
}