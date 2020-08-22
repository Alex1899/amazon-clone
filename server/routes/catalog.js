var express = require('express');
var Product = require('../model/products');

var router = express.Router();


router.get('/', async (req,res) => {
    const products = await Product.find();

    if (!products)
        return res.json({ msg: 'No products in the database'})

    res.send(products);
});

module.exports = router;