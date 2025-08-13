const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes')


require('dotenv').config()

const PORT = process.env.PORT || 3000

const { connectDB } = require('./connection')


const app = express();
app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

connectDB('mongodb://localhost:27017/crudapp').then(() => console.log('Mongodb connected!'))


app.use('/api/users', userRoutes)

app.use('/', (req, res) => {
    res.send('Hello backend');
})

app.listen(PORT, () => {
    console.log(`server running at port : ${PORT}`)
})