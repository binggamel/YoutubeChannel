//기본모듈
//fs  : 파일시스템을 다루기 위ㅏㅎㄴ 모듈
const fs = require("fs");


//파일 읽기 
//동기식
try {
    const data = fs.readFileSync("hello.txt","utf8");
    console.log(data);
} catch (exception) {
    console.error("Error : " + exception);
}

console.log("동기식 처리 완료");

//비동기식
fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error : " + err);
    } else {
        console.log(data);
    }
});
 
console.log("비동기식 처리 완료"); //이게 먼저 출력됨;