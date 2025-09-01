const express = require('express');
const cors = require('cors')

const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')

const { connectionMongo } = require('./config/connection')

require('dotenv').config();


const port = process.env.PORT;


const app = express();
app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
    methods: ['POST', 'PUT', 'DELETE', 'GET']
}))

connectionMongo(process.env.MONGO_URI).then(()=>console.log(`mongodb connection successful!`))




app.use('/api/auth', authRoutes )
app.use('/api/users', userRoutes )
app.use('/api/orders', orderRoutes )
app.use('/api/products', productRoutes )


app.get('/', (request, response) => {
    response.send('Hello backend')
})



app.listen(port, ()=> {
    console.log(`server is running at port :${port}`)
})