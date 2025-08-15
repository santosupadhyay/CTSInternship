const express = require('express');
require('dotenv').config();

require('./crons/newsletter');
require('./crons/salesreport');
require('./crons/socialmediapost');

require('./crons/scheduledmail/schedulemail')

const {connectDB} = require('./config/connection')

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

connectDB('mongodb://localhost:27017/cronjobs').then(() => console.log('Mongodb connected!'))

app.get('/', (req, res)=>{
    res.send('Hello backend')
})

app.listen(port, ()=> {
    console.log(`server is running at port : ${port}`)
})