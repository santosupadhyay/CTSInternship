const User = require("../models/User");

const getAllUsers = async (request, response) => {
  try {
    const users = await User.find();

    if (!users) {
      return response.status(404).json({
        success: false,
        message: "Users not found",
      });
    }
    response.status(200).json({
      success: true,
      message: "Fetched all the users successfully",
      data: {
        users: users,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUserById = async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);
    if (!user) {
      return response.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return response.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: {
        user: user,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUserById = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, email, password, address, role, phone } = request.body;
    const user = await User.findById(id);
    if (!user) {
      return response.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
        role,
        address,
        phone,
      },
      {
        new: true,
      }
    );

    response.status(200).json({
      success: true,
      message: "User updated successfully",
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUserById = async (request, response) => {
    try {
        const {id}=request.params;
        const deletedUser = await User.findByIdAndDelete(id);
        response.status(200).json({
            success:true,
            message:'User deleted successfully',
        })
    } catch (error) {
        return response.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
};
