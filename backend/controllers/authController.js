const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  });
};

const singupPost = async (req, res) => {
    let {username , password , role} = req.body
    if(!username || !password || !role){
      res.status(401).json({ message: "Please enter username ,password and role"  , success:false});
      return
    }
    try {
      const find = await User.findOne({ username: req.body.username });
      if (find) {
        res.status(400).json({ message: "user already exists!"  , success:false});
        return;
      } else {
        const user = await User.create(req.body);
        const token = createToken(user._id);
        res.status(201).json({ user: user, message: "signup successful"  , token:token , success:true});
      }
    } catch (err) {
      res.status(500).json({ message: err  , success:false});
    }
  };
  
  
  
  
  const loginPost = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
      res.status(400).json({ message: "Please enter username and password"  , success:false});
    }
  try {
    const user = await User.login(username, password);
    if (user) {
      const token = createToken(user._id);
      res.status(200).json({message:"success" , success:true , token:token, user:user})
    }
    else{
      res.status(401).json({ message: "Invalid Credentials"  , success:false});
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err  , success:false});
  }
  };
  
  const logoutGet = (req, res) => {
    res.cookie("user", "", { maxAge: 1 });
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
  };
  
module.exports = { singupPost, loginPost, logoutGet};