const express = require('express');
require('dotenv').config()
const path = require('path');

const userRoutes = require('./routes/userRoutes')

const {connectDB} = require('./connection')
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.set('views', path.resolve('./views'));

app.set('view engine', 'ejs')

connectDB('mongodb://localhost:27017/testmiddlewares').then(()=> console.log('Mongodb connected!'))

app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send('Hello backend')
})

app.use('/api/users', userRoutes)
app.get("/register", (req, res) => {
  res.render("register",  { formData: {} }); 
});

app.listen(PORT, () => {
    console.log(`server running at port : ${PORT}`)
})