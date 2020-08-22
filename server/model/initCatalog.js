require('dotenv').config({path: '../../.env'});

var Product = require('./products');
var mongoose = require('mongoose');
console.log(process.env.MONGODB_CONNECTION_URL);

module.exports.test = async () => {
    console.log(process.env.MONGODB_CONNECTION_URL);
    const connection = await mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    console.log(connection);
    const response = await Product.insertMany([
        {
           title: 'Very sick dumbell! Trust!!',
           price: 150,
           rating: 5,
           image: '/assets/dumbell.jpg' 
        },
        {
            title: 'This is a bench',
            price: 250,
            rating: 5,
            image: '/assets/bench.jpg' 
         },
         {
            title: 'This is a barbell',
            price: 50,
            rating: 5,
            image: '/assets/barbell.jpg' 
         },
         {
            title: 'This is a bike',
            price: 350,
            rating: 5,
            image: '/assets/bike.jpg' 
         },
         {
            title: 'This is a cardio machine',
            price: 450,
            rating: 5,
            image: '/assets/cardio.jpg' 
         },
         {
            title: 'This is a medicine ball',
            price: 50,
            rating: 5,
            image: '/assets/ball.jpg' 
         }
    ]);
    console.log(response);
    return 
}
this.test();