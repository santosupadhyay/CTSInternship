const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes')

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())


const PORT = process.env.PORT

app.get('/', (request, response) => {
    response.send('Welcome to my express app.')
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`app is running on the port : ${PORT}`)
})