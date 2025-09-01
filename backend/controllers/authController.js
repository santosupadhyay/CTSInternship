const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");

const jwtSecret = process.env.JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;

const register = async (request, response) => {
  const { name, email, password, role, address, phone } = request.body;
  console.log(name, email, password, role, address, phone);

  if (!name || !email || !password || !address || !phone) {
    return response.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!regexPassword.test(password)) {
    return response.status(400).json({
      success: false,
      message:
        "Password must contain 1 uppercase, 1 Number and 1 special character",
    });
  }

  const user = await User.findOne({ email });
  if (user) {
    return response.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      phone,
      role,
    });

    response.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          name: newUser.name,
          email: newUser.email,
          address: newUser.address,
          phone: newUser.phone,
          role: newUser.role,
        },
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (request, response) => {
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
        message: "Email or password wrong",
      });
    }

    const token = jwt.sign({ id:user._id, name:user.name, email:user.email, address:user.address, role:user.role, phone:user.phone}, jwtSecret, { expiresIn:'7d'})
    const refresh = jwt.sign({ id:user._id, name:user.name, email:user.email, address:user.email, role:user.role, phone:user.phone}, jwtRefreshSecret, { expiresIn:'7d'})


    response.status(200).json({
        success:true,
        data:{
            user:{
                name:user.name,
                email:user.email,
                address:user.address,
                phone:user.phone,
                role:user.role
            },
            accessToken:token,
            refreshToken:refresh
        }
    })

  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login
};
