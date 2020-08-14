var express = require('express');
var User = require('../model/user');

var router = express.Router();


/* Login the user */
router.post('/login', async (req, res) =>{
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({msg: 'Not all required fields are filled'});
 
  //check if the user exists

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ msg: 'User not found with these credentials'});
   
  res.json({ displayName: user.displayName });
});

/* Register the user */
router.post('/register', async (req, res) => {
  let { displayName, email, password, passwordCheck } = req.body;

  // validation
  if (!email || !password, !passwordCheck)
    return res.status(400).json({ msg: 'Not all required fields are filled'})
  
  if (!displayName)
    displayName = email;
  
  if (passwordCheck !== password)
    return res.status(400).json({ msg: 'Passwords do not match'})
  
  // check if user with this email already exists
  const userExists = await User.findOne({email});
  if (userExists)
    return res.status(400).json({ msg: 'User with this email already exists'});

  const user = new User({ displayName, email, password});
 
  let response = await user.save();
  if (response.error){
    console.log('Error', response);
  }
  
  console.log(response);
  res.json({ displayName });
  
})

module.exports = router;
