const hi = (name) => {
  console.log(`${name} 님, 안녕하세요?`);
};
const goodbye = (name) => {
  console.log(`${name} 님, 안녕히 가세요`);
};
// 모듈에서 기본적으로 내보낼 것을 지정
export default { hi, goodbye };