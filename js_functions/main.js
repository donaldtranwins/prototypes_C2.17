function myMessage() {
    console.log("Called myMessage()");
}
function add(num1, num2) {
    console.log(num1+num2);
}
function add2(num1, num2) {
    return num1 + num2;
}
var add2result = add2(8,15);
function cardFlip(tables) {
    $(tables).hide();
}