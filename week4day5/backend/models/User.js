import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:[true, 'Email is required'],
        validate:{
            validator:function(v){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength:[8, 'Password must contain at least 8 characters'],
        validate:{
            validator: function(v){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: 'Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character'
        }
    }
}, { timestamps:true })

const User = mongoose.model("User", userSchema);
export default User;