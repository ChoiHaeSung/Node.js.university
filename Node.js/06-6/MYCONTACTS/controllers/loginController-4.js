const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc Register Page
// @route GET  /register
const getRegister =(req,res)=>{
  res.render("register");
};

// @desc Register user
// @route POST /register
const registerUser = asyncHandler(async(req,res)=>{
  const {username, password, password2} = req.body;
  if(password === password2){
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({username,password:hashedPassword});
    res.status(201).json({message:"Register sucdessful",user});
  }else{
    res.send("Register Failder");
  }
});

// @desc Get login page
// @route GET
const getLogin = (req,res)=>{
  res.render("home");
};

// @desc Login user
// @route POST
const loginUser = asyncHandler(async(req,res)=>{
  const{username,password}=req.body;
if (username==="admintest" && password==="admintest"){
  res.send("Login success");
}else{
  res.send("Login Failed");
}
});

module.exports = {
  getRegister,
  registerUser,
  getLogin,
  loginUser
};