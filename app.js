var userInput;
var userName;
userInput = 4;
userInput = "aaa";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("エラーが発生しました", 500);
console.log(result);
