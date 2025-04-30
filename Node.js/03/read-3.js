// 함수 fs를 지정
const fs = require("fs");
// 파일을 문자열로 읽어 올게 만약에 에러가 나면 에러 표시하고 아니면 출력할게
fs.readFile("./example.txt", "utf8", (err, data)=>{
  if(err){
    console.error(err);
  }
  console.log(data);
});