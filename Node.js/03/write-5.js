// fs 모듈 가져오기
const fs = require("fs");
// 파일에 덧 붙이기 text-2 파일에, 덧 붙일 내용, callback구만
// 만약 오류가 날시 console에 추가
// 추가 성공시 appending to file 출력
fs.appendFile("./text-2.txt", "\n\n 새로운 내용 추가", (err) => {
  if (err) {
    console.log(err)
  }
  console.log("appending to file");
})