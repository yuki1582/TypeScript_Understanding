"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (result === "as-number") {
    //     return +result;
    // } else {
    //   return result.toString();
    // }
}
const combineAges = combine(30, 26, "as-number");
console.log(combineAges);
const combinedNames = combine("30", "26", "as-number");
console.log(combinedNames);
const combinedStringAges = combine("Max", "Annna", "as-number");
console.log(combinedStringAges);
//# sourceMappingURL=union-aliases.js.map