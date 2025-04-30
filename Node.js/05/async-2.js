console.log("첫 번쨰 작업");
setTimeout(() => {
  console.log("두 번쨰 작업");
}, 0);
console.log("세 번째 작업");

// review : setTimeout을 활용하여 콜백 활성화해서 132순서로 출력한다 왜냐하면 콜백기능은 현재 실행중인 스크립트가 종료된 후에 실행된다는 점이다.