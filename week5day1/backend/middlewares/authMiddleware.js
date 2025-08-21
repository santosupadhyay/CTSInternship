const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (request, response, next) => {
    let token;
    let authHeader = request.headers.Authorization || request.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(' ')[1]

        if(!token){
            return response.status(401).json({
                message:'No token, not authorized'
            })
        }
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            request.user = decode;
            next();
        } catch (error) {
            return response.status(500).json({
                message:error.message
            })
        }
    } else {
        return response.status(401).json({
            message:'No token, not authorized'
        })
    }
}

module.exports = verifyToken;