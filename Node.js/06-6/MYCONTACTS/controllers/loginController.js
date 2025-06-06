const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
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

  const user = await User.findOne({username});

  if(!user){  // 일치하는 사용자가 없다면 오류 메시지 표시
    return res.status(401).json({message:"일치하는 사용자가 없습니다."});
  }
  // 입력된 비밀번호 와 사용자의 비밀번호 비교
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "비밀번호가 일치하지 않습니다."});
  }

  // 사용자 ID를 기반으로 JWT 토큰 생성
  const token = jwt.sign({ id: user._id }, jwtSecret);
  // 생성된 토큰을 쿠키에 저장
  res.cookie("token", token, {httpOnly:true});

  // 로그인에 성공하면 '/contacts'로 이동시킨
  res.redirect("/contacts");

});

module.exports = {
  getRegister,
  registerUser,
  getLogin,
  loginUser
};