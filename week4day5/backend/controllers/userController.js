import createHttpError from "http-errors";
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import { config } from 'dotenv';
config();

import pkg from 'jsonwebtoken';
const { sign } = pkg;

const jwtSecret = process.env.JWT_SECRET

const registerUser = async (request, response, next) => {

    const { name, email, password } = request.body;
    console.log(name, email, password)
    if (!name || !email || !password) {
        const error = createHttpError(400, 'All fields are required');
        return next(error)
    }
    //routes specific error handling
    try {
        const user = await User.findOne({ email });
        console.log(email)
        console.log(user)
        if (user) {
            const error = createHttpError(400, 'User already exists with this email');
            return next(error)
        }
    } catch (error) {
        return next(createHttpError(500, 'Error while getting user'))
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)

    let newUser;
    try {
        newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        console.log(name, email, password)
    } catch (error) {
        return next(createHttpError(500, 'Error creating a user'))
    }

    try {
        const token = sign({ sub: newUser._id }, jwtSecret, {
            expiresIn: '7d'
        })
        response.status(201).json({ accessToken: token });
    } catch (error) {
        return next(createHttpError(500, 'Error while signing the jwt token'))
    }
}


const loginUser = async (request, response, next) => {
    const { email, password } = request.body;
    
    if(!email || !password){
        return next(createHttpError(400, 'All fields are required'));
    }

    const user = await User.findOne({ email });
    if(!user) {
        return next(createHttpError(404, 'User not found'))
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return next(createHttpError(400, 'Username or password incorrect!'))
    }

    try {
        const token = sign({ sub: user._id}, jwtSecret, {
            expiresIn:'7d'
        })
        response.json({ accessToken : token})
    } catch (error) {
        return next(createHttpError(500, 'Internal server error'))
    }
}


export { registerUser,  loginUser }