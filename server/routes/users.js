var express = require('express');
var User = require('../model/user');

var router = express.Router();


/* Login the user */
router.get('/', function(req, res) {
   res.send('test passed');
});

/* Register the user */
router.post('/', function(req, res) {
  console.log(req.body);
  const data = req.body;
  const user = new User(data);
 
  user.save()
    .then((result => console.log(`User ${data.email} saved in the database`)))
    .catch(err => console.log(err));
})

module.exports = router;
