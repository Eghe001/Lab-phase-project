const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn : {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    published_date: {
        type: Date,
    },
    publisher: {
        type: String,
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
})
module.exports = Book = mongoose.model('book', bookSchema)