const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express();

app.use(
  session({
    secret: "secret code",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DB_CONNECT, // .env에 반드시 이 값이 있어야 합니다
    }),
    cookie: { 
      maxAge: 60 * 60 * 24 * 1000 // 1일 = 밀리초 단위
    },
  })
);

app.get("/", (req, res) => {
  if (req.session.count) {
    req.session.count++;
    res.send(`${req.session.count}번째 방문입니다.`);
  } else {
    req.session.count = 1;
    res.send("첫 번째 방문입니다.");
  }
});

app.get(".session", (req,res) => {
  res.send(`session ID : ${req.sessionID}`);
});

app.get("/delet-session", (req, res) => {
  req.session.destroy((err)=> {
    if(err){
      console.log(err);
    } else{
      res.clearCookie("connect.sid");
      res.send("세션 삭제");
    }
  });
});

// 여기가 핵심: listen이 맞는 메서드입니다
app.listen(5000, () => {
  console.log("서버 실행 중");
});
