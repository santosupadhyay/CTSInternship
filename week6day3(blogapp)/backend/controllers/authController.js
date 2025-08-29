const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;

const registerUser = async (request, response) => {
  const { name, email, password, role } = request.body;

  if (!name || !email || !password || !role) {
    return response.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

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
        message: "User already exists with this email",
      });
    }
  } catch (error) {
    response.status(500).json({
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

    response.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        }
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

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      jwtSecret,
      {
        expiresIn: "10m",
      }
    );
    const refresh = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      jwtRefreshSecret,
      {
        expiresIn: "30d",
      }
    );

    response.cookie("refreshToken", refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    response.status(200).json({
      success: true,
      data: {
        user: {
          email: user.email,
          role: user.role,
          name: user.name,
        },
        accessToken: token,
        refreshToken: refresh,
      },
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const refreshAccessToken = async (request, response) => {
  try {
    const refreshToken =
      request.cookies?.refreshToken || request.body.refreshToken;
    if (!refreshToken) {
      return response.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    jwt.verify(refreshToken, jwtRefreshSecret, async (err, decoded) => {
      if (err) {
        return response.status(403).json({
          success: false,
          message: "Invalid refresh token",
        });
      }

      const user = await User.findById(decoded._id);

      if (!user) {
        return response.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const newAccessToken = jwt.sign(
        {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        jwtSecret,
        {
          expiresIn: "10m",
        }
      );
      response.status(200).json({
        success: true,
        accessToken: newAccessToken,
      });
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  loginUser,
  registerUser,
  refreshAccessToken,
};
