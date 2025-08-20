const express = require('express');
require('dotenv').config();

const {logger} = require('./utils/logger')

const port = process.env.PORT;
const {mongoConnection} = require('./config/connection')

const userRoutes = require('./routes/userRoutes')
const userRoleRoutes = require('./routes/userRoleRoutes')

const app = express();
app.use(express.json());

mongoConnection(process.env.MONGO_URI).then(() => logger.info(`mongo db connection successful!`));

app.get('/', (request, response) => {
    logger.info('Hello backend')
})

app.use('/api/auth', userRoutes);
app.use('/api/users', userRoleRoutes)

app.listen(port, ()=>{
    logger.info(`server running at port ${port}`)
})