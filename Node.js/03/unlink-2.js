// fs 모듈 가져오기
// text-1.txt 파일이 없다면, 파일이 존재하지 않습니다라는 문구 출력
// text-1.txt 파일이 있다면, 파일 삭제하기
const fs = require("fs");
if (!fs.existsSync("./text-1.txt")){
  console.log("file does not exist");
} else {
  fs.unlink("./text-1.txt");
  console.log("file deleted");
}