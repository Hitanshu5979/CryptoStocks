const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'iamagoodboy';
var fetchuser = require('../middleware/fetchuser');

//ROUTE 1
//Create a User using : POST "/api/auth/createuser" this is the end point. Here
//we send the post request adn send data and it doesn't require auth
router.post('/createuser',[
    body('name','Invalid name.Please enter only string characters').isLength({ min: 5}),
    body('email','Please Enter a valid email id').isEmail(),
    body('password','Password must be atleast 5 characters long').isLength({ min:5 }),

], async(req, res) =>{
    let success=false;
    //If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
   //Check whether the user with this email exists already
try {
    let user = await User.findOne({email: req.body.email});
    if(user){
     return res.status(400).json({success,error: "Sorry a user with this email already exists"})
    }
    const salt = await bcrypt.genSalt(10); 
    const secPass = await bcrypt.hash(req.body.password, salt);
    //Create a new user
        user = await User.create({
        name: req.body.name,
        password: secPass,
        email:req.body.email,
      });
    const data = {
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    //console.log(jwtData);

      
    //res.json(user)
    success=true;
    res.json({success,authtoken})
     
} catch(error){
   console.error(error.message);
   res.status(500).send("Interal Server Error ");//To catch internal error like improper change in code,etc.
}
    })


    //ROUTE 2
    //Authenticate a User: POST "/api/auth/login".No Login Required
    router.post('/login',[
        body('email','Please Enter a valid email id').isEmail(),
        body('password','Password cannot be blank').exists(),
    ], async(req, res) => {
        let success=false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const{email, password} = req.body;
        try {
            let user = await User.findOne({email});
            if(!user)
            {
                success=false;
                return res.status(400).json({error:"Please try to login with correct credentials"});
            }
            
                const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                success = false;
                return res.status(400).json({success,error:"Please try to login with correct credentials"});
            }

            const data = {
              user:{
                  id:user.id
              }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success,authtoken})
        }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
        }
    });

    //ROUTE 3  : Get loggedin User Details using: POST "/api/auth/getuser". Login required(Which means we have to send JWT token here)
    router.post('/getuser', fetchuser,async(req, res) => {
    
        
        try{
        userId = req.user.id;
       const user = await User.findById(userId).select("-password")
       res.send(user);   
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error");
    }
})
module.exports = router