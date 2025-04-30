const fs = require("fs");

const data = fs.readFileSync("./example.txt","utf8");
// writeFileSyenc를 사용하여 text-1.txt에 example.txt 내용을 기록
fs.writeFileSync("./text-1.txt",data);