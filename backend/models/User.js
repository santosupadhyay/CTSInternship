const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        lowercase:true,
        validate:{
            validator:function(v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
            },
            message: props => `${props} are not a valid email`
        }
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);