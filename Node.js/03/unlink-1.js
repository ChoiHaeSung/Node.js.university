// 모듈 fs 가져오기
const fs = require("fs");
// fs에 있는 파일 삭제 성공시 file deleted 출력
fs.unlinkSync("./text-1.txt");
console.log("file deleted");
