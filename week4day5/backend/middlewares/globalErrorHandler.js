
const globalErrorHandler = (error, request, response, next) => {
    const statusCode = error.statusCode || 500

    return response.status(statusCode).json({
        message: error.message
    })
}

export default globalErrorHandler;