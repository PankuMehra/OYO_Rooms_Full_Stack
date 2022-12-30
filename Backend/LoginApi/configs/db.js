const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/web6_ecommerce')
}

module.exports = connect;