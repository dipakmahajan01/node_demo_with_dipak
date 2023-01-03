const mongoose = require('mongoose');
require('dotenv').config()
exports.dbCollection = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URL, (error) => {
            if (error) {
                console.log(error)
            }
            console.log('connect to db')
        })
    }
    catch (error) {
        console.log(error)
    }
}