const { sign } = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();

const registerUser = async (request, response) => {
  const { name, email, password, role } = request.body;

  if (!name || !email || !password) {
    return response.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Validate password format before hashing
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return response.status(400).json({
      success: false,
      message:
        "Password must contain at least 1 uppercase, 1 lowercase, 1 special character and 1 number",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return response.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = sign(
      {
        id: newUser._id,
        // name: newUser.name,
        // email: newUser.email,
        role: newUser.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    response.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
        accessToken: token,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response.status(400).json({
        success: false,
        message: "Incorrect Email or Password ",
      });
    }

    const token = sign(
      {
        id: user._id,
        // name: user.name,
        // email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    response.status(200).json({
      success: true,
      data: {
        user: {
          email: user.email,
          role: user.role,
        },
        accessToken: token,
      },
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
