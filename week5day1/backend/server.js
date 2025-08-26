const express = require('express');
require('dotenv').config();
const cors = require('cors')

const {logger} = require('./utils/logger')

const port = process.env.PORT;
const {mongoConnection} = require('./config/connection')

const userRoutes = require('./routes/userRoutes')
const userRoleRoutes = require('./routes/userRoleRoutes')

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


mongoConnection(process.env.MONGO_URI).then(() => logger.info(`mongo db connection successful!`));

app.get('/', (request, response) => {
    logger.info('Hello backend')
})

app.use('/api/auth', userRoutes);
app.use('/api/users', userRoleRoutes)

app.listen(port, ()=>{
    logger.info(`server running at port ${port}`)
})