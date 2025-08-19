import express from 'express';
import {connectDB} from './connection.js';


import { config } from 'dotenv';
config();
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import userRouter from './routes/userRoutes.js';

const port = process.env.PORT;

const app = express();
app.use(express.json());

connectDB('mongodb://localhost:27017/errorhandling').then(() => console.log(`Mongodb connected!`))

app.get('/', (request, response) => {
    response.send('Hello backend');
})
app.use("/api/users", userRouter);


//globalErrorHandler should be called at last after the api has been called
app.use(globalErrorHandler)

app.listen(port, () => {
    console.log(`server is running at port : ${port}`);
})