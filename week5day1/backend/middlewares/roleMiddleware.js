const authRoleMiddleware = (...allowedRoles) => {
    return (request, response, next) => {
        if(!allowedRoles.includes(request.user.role)){
            return response.status(403).json({
                message:'Not authorized'
            })
        }
        next();
    }
}
module.exports = authRoleMiddleware;