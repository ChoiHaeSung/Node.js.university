// 1. file.js를 새로 만든 후 writeData 함수를 정의
// 2. writeData 함수는 파일의 경로와 내용을 인자로 받아서 
//  지정한 파일 경로에 내용을 저장하도록 코드 작성
// 3. module.exports를 사용해 writeData 함수를 내보냅니다
const writeData = require("./file.js");

const data = 'This is sample of mine';
writeData('./mydata.txt', data);

module.exports("writeData")