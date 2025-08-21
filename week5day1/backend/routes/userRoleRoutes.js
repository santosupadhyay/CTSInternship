const express = require('express');
const verifyToken = require('../middlewares/authMiddleware')
const authRoleMiddleware = require('../middlewares/roleMiddleware')

const router = express.Router();

router.get('/admin',verifyToken, authRoleMiddleware('admin'), (request, response) => {
    response.json({
        message:'Welcome Admin'
    })
})

router.get('/user',verifyToken, authRoleMiddleware('admin', 'user'), (request, response) => {
    response.json({
        message:'Welcome User'
    })
})

module.exports = router;