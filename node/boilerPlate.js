//fs객체 : file system(파일 생성, 수정, 삭제 등 가능)
//fs객체를 사용하기 위해서는 모듈을 가져와야 함
const fs = require("fs");
// console.log(fs);

// fs.mkdir("dogs", { recursive: true }, (err) => {
//   console.log("I Come After mkdir");
//   if (err) throw err;
// });
// console.log("I Come Before mkdir");
// //fs 객체의 메소드는 default 값이 비동기 이므로 콘솔로그 안의 내용이 먼저 출력

// fs.mkdirSync("cats");
//동기적으로 mkdir메소드 실행

const folderName = process.argv[2] || "Project";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`);
  fs.writeFileSync(`${folderName}/app.css`);
  fs.writeFileSync(`${folderName}/app.js`);
  //process.argv를 사용하여 node REPL에서 파일 실행 시 부여한 인수를 폴더명으로 만들고
  //fs.writeFileSync를 사용하여 폴더 아래에 3개의 파일 생성
  //fs.writeFileSync가 계속 오류나는데 이유를 모르겠다...
} catch (e) {
  console.log("ERROR");
  console.log(e);
}
