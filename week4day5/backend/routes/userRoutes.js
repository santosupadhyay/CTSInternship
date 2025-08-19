import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { validateRegister } from "../test.js";

const userRouter = express.Router();

// routes
userRouter.post("/register", registerUser);

//validation using express-validator
// userRouter.post("/register",validateRegister, registerUser);

userRouter.post("/login", loginUser);

export default userRouter;