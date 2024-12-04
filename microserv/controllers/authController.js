const User = require("../models/user.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// INSCRIPTION
exports.register = async (req, res) => {
  let username = req.body.username
  let password = req.body.password

  password = await bcrypt.hash(password, 10)

  // bcrypt.hash(password, 10, (err, hash) => {
  //   if (err) {
  //     res.status(500).json({ error: 'Internal server error' })
  //   }
  //   ...
  // })

  const newUser = new User({
      username: username,
      password: password
  });

  try {
      const savedUser = await newUser.save();
      return res.status(201).json(savedUser);
  } catch (error) {
      console.error("Error saving user:", error);
      return res.status(500).json({ error: "An error occurred while creating the user" });
  }
}

// CONNEXION
exports.login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = await User.findOne({ username })
 
  try{
    if(user){
      if(await bcrypt.compare(`${req.body.password}`,user.password)){
        // const token = user.generateAccessJWT();
        // res.cookie("SessionID", token);
        res.status(200).json({
          status: "success",
          data: user,
          message: "You have successfully logged in.",
      });
      }else{
        return res.status(401).json({status: "failed",message:"Invalid username or password."});
      }
    }else{
      return res.status(401).json({status: "failed", message: "Account does not exist"})
    }


  }catch(err) {
    res.status(500).json({
        status: "error",
        code: 500,
        data: [],
        message: "Internal Server Error",
    });
  }
   
}


// const user = ((req, res) => {
//     res.json(User)
// })

// exports.createUser = ((req, res) => {
//     const newUser = {
//         id: user.length + 1,
//         username: req.body.username,
//         password: req.body.password
//     }

//     try{
//         User.push(newUser)
//         return res.status(201).json(newUser)
//     }catch{
//         return res.status(500).json("err")
//     }
// })

// module.exports = {
//     createUser
// }