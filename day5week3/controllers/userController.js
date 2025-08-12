const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            msg: 'users not found'
        })
    }
}

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, gender } = req.body;
        const newUser = await User.create({ firstName, lastName, email, gender });
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, gender } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { firstName, lastName, email, gender },
            { new: true }
        )
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findUserByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:'User deleted Successfully'
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}