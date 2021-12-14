const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

userSchema.set('toJSON', {
    virtuals: true, 
    versionKey: false,
    transform: function(doc, ret){
        delete ret._id;
        delete ret.password
    }
})


module.exports = User = mongoose.model('User', userSchema)