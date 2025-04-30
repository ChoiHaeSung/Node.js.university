// fs moudule을 가지고 오기
const fs = require("fs");
// if noneFile 시 파일이 없다고 출력, 존재시 file deletd
if (!fs.existsSync("./text-2.txt")){
  console.log("file does not exist");
} else {
  fs.unlink("./text-2.txt", () => {
    console.log("file deleted");
  });
}