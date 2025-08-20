const mongoose = require('mongoose');

const mongoConnection = async (url) => {
    mongoose.connect(url);
}
module.exports = { mongoConnection }