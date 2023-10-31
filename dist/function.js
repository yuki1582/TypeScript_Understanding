"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// 何も返さないvoid型 returnは不要
// function printResult(num: number): void {
//   console.log("Result:" + num);
// }
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// console.log(printResult(add(5, 12)));
//# sourceMappingURL=function.js.map