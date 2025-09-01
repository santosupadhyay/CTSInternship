const mongoose = require('mongoose');

const connectionMongo = async(url) => {
    mongoose.connect(url)
}

module.exports = {
    connectionMongo
}