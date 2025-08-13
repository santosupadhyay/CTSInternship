const User = require('../models/User');

const getAllUsers = async(request, response) => {
    try {
        const users = await User.find();
        response.status(200).json({
            success:true,
            data:users
        })
    } catch (error) {
        response.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const createUser = async(request, response) => {
    const { name, email, password } = request.body;
    try {
        const newUser = await User.create({
            name,
            email,
            password
        })
        if(!name || !email || !password) return response.status(500).json({message:'Please enter all the values'});
        response.status(201).json({
            success:true,
            data:newUser
        })
    } catch (error) {
        response.status(500).json({
            success:false,
            message:error.message
        })
    }
}


const getUserById = async(request, response) =>  {
    const { id } = request.params;
    try {
        const user = await User.findById(id);

        if(!user) return response.status(404).json({ message : 'User not found'})

        response.status(200).json({
            success:true,
            data:user
        })
    } catch (error) {
        response.status(404).json({
            success:false,
            message:'User not found'
        })
    }
}

const updateUserById = async(request, response)=>{
    const {id}= request.params;
    const { name, email, password} = request.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {name, email, password},
            {new : true}
        )
        response.status(200).json({
            success:true,
            data: updatedUser
        })
    } catch (error) {
        response.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const deleteUserById = async(request, response) => {
    const {id}=request.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        response.status(200).json({
            success:true,
            message:'User deleted Successfully'
        })
    } catch (error) {
        response.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}