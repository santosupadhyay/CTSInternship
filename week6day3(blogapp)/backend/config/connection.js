const mongoose = require('mongoose');

const mongodbConnection = async(url) => {
    mongoose.connect(url)
}

module.exports = {
    mongodbConnection
}