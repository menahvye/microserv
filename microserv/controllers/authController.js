const User = require("../models/user.js");

exports.register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    try {
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error saving user:", error);
        return res.status(500).json({ error: "An error occurred while creating the user" });
    }
}


exports.login = async (req, res) => {
    User.findOne({
      username: req.body.username,
    })
        res.status(200).send({
          id: user._id,
          username: user.username,
        });
  };


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