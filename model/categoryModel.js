const mongoose = require('mongoose')

const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
    },
    description: {
        type: String,
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
},
    { timestamps: true })
module.exports = mongoose.model('Category', categoryModel)