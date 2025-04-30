const fs = require("fs");
// readFileSync를 사용할 떄 "utf8"을 사용해야 문자열로 받아올 수 있다
const data = fs.readFileSync("./example.txt", "utf8");
console.log(data);