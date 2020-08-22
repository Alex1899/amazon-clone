const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
}, { timestamps: true});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;