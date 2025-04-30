async function init() {
// 서버에서 정보를 가져오기 시간이 걸리기에 await 함수를 선언하여 정보를 다 가져왔을 시 다음 동작을 시작합니다
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 가져온 결과를 객체로 변환해서 users에 저장 하는 시간도 길어지기에 await 함수 사용
  const users = await response.json();
// users 표시
  console.log(users);
}
init();