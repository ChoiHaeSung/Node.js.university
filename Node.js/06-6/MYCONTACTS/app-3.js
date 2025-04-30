const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/",(req, res) => {
  // json으로 보기 218p
  res.status(200);
  res.json({message: "Hello node ===///"});
  
  // header로 보기
  // const headers =req.headers;
  // res.send(headers);
  
  // res.status(200);
  // res.send("Hello Node!");
});
// 모든 연락처 가져오기기
app.get("/contacts", (req, res) =>{
  res.sendFile(__dirname + "/assets/contacts.html");
  // res.status(200).send("Contact Page");

});

// 새 연락처 추가하기기
app.post("/contacts", (req, res)=>{
  res.status(201).send("Create Contacts");
});

// 연락처 상세보기
app.get("/contacts/:id", (req, res) => {
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

//연락처 수정하기
app.put("/contacts/:id", (req, res) => {
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// 연락처 삭제하기
app.delete("/contacts/:id", (req, res) => {
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});