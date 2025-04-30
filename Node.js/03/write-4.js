// fs 매개변수를 모듈로 가져온다
const fs = require("fs");
// 새로운 내용을 추가해보자

let content = `
===============================

새로운 내용을 추가해보자

===============================
`;

fs.writeFileSync("./text-1.txt", content, {flag: "a"});