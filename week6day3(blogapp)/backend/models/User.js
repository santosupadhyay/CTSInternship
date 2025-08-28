const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        lowercase:true,
        unique:true,
        validate:{
            validator:function(v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message:props => `${props.value} is not a valid email`
        }
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },
    role:{
        type:String,
        required:true,
        enum:['admin', 'user'],
        default:'user'
    }
}, { timestamps:true })

module.exports = mongoose.model('User', userSchema)