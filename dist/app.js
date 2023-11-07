"use strict";
let appId = "abc";
const button = document.querySelector("button");
const addd = (n1, n2) => {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
};
const clickHandler = (message) => {
    // let userName = "Max";
    console.log("Clicked!" + message);
};
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're Welcome"));
}
//# sourceMappingURL=app.js.map


