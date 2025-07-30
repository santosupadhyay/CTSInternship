const express = require('express')
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5000

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', async(request, response) => {
    try {
        response.send('Hello world') // Changed from request.send to response.send
    } catch (error) {
        console.error(error)
        response.status(500).json({
            error:'DB connection failed'
        })
    }
})

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})