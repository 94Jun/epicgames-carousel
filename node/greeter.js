const args = process.argv.slice(2);
for (let arg of args) {
  console.log("Hello " + arg);
}
//node REPL 에서 인수 전달 가능
//전달 받은 인수를 변수에 넣어 사용 가능
//node REPL : node greeter.js 인수1 인수2
//process.argv의 0~1번째 인덱스는 경로이므로 slice를 통해 2번 index부터 사용자가 입력한 인수 사용 가능
