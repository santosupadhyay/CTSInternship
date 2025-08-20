const express = require('express');
const verifyToken = require('../middlewares/authMiddleware')

const router = express.Router();

router.get('/admin',verifyToken, (request, response) => {
    response.json({
        message:'Welcome Admin'
    })
})

router.get('/user',verifyToken, (request, response) => {
    response.json({
        message:'Welcome User'
    })
})

module.exports = router;