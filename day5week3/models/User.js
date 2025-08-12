const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        enum: ['Male', 'Female', 'Other'],
        required:true,
        default:'male'
    }
}, {timestamps: true}) 

module.exports = mongoose.model('User', userSchema)