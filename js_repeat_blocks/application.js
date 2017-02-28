var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var mixedArray = [4, 56, 11, 13, 97, 22, 7, 36, 19, 5, 8, 10];
var classRoom = {desk1: 'Stu', desk2: 'Peggy', desk3: 'LoneStar', desk4: 'George', desk5: 'Sheldon'};
var studentArray = [{name: "Bob", grade: 87}, {name: "Fred", grade: 82}, {name: "George", grade: 93}, {name: "Robert", grade: 85}];

function doFeatureSet1_1() {
    $('#outputDiv').text("Feature Set 1_1 - For loops: Ascending");
    $('#outputDiv').append($('<div>').text("Numbers:  [" + numbers + "]"))
        .append($('<hr>'));
    for (var i = 0; i < numbers.length; i++) {
        $('#outputDiv').append($('<div>').text(numbers[i]));
    }
}
function doFeatureSet1_2() {
    $('#outputDiv').text("Feature Set 1_2 - For loops: Descending");
    $('#outputDiv').append($('<div>').text("Numbers:  [" + numbers + "]"))
        .append($('<hr>'));
    for (var i=9; i>-1; i--){
        $('#outputDiv').append($('<div>').text(numbers[i]));
    }
}
function doFeatureSet1_3() {
    $('#outputDiv').text("Feature Set 1_3 - For loops: Every Odd");
    $('#outputDiv').append($('<div>').text("Numbers:  [" + numbers + "]"))
        .append($('<hr>'));
    for (var i = 0; i < numbers.length; i+=2) {
        $('#outputDiv').append($('<div>').text(numbers[i])); //technically incorrect, functionally correct
    }
}
function doFeatureSet1_4() {
    $('#outputDiv').text("Feature Set 1_4 - For loops: Every Odd (Real)");
    $('#outputDiv').append($('<div>').text("Mixed Array:  [" + mixedArray + "]"))
        .append($('<hr>'));
    for (var i = 0; i < mixedArray.length; i++) {
        if (mixedArray[i] % 2 === 1)
            $('#outputDiv').append($('<div>').text(mixedArray[i]));
    }
}
function doFeatureSet2_1() {
    $('#outputDiv').text("Feature Set 2_1 - For In loops: Value and Key reference");
    $('#outputDiv').append($('<div>').text("Classroom:  [" + classRoom + "]"))
        .append($('<hr>'));
    for (aDesk in classRoom) {
            $('#outputDiv').append($('<div>').text(classRoom[aDesk] + " is at " + aDesk));
    }
}
function doFeatureSet3_1() {
    $('#outputDiv').text("Feature Set 3_1 - While loops - Objects nested in an Array");
    $('#outputDiv').append($('<div>').text("Student Array:  [" + studentArray + "]"))
        .append($('<hr>'));
    function findStudent(name){
        var i=0;
        var unfound = true;
        while (unfound && i < studentArray.length){
            var student = studentArray[i];
            if (student.name === name) {
                $('#outputDiv').append($('<div>').text("Found " + name + ", their grade is " + student.grade + "."));
                unfound = false;
            }
            i++;
        }
        if (unfound)
            $('#outputDiv').append($('<div>').text("Student " + name + " was not found."));
    }
    findStudent("George");
    findStudent("Fred");
    findStudent("Hank");
}
$(document).ready(function () {
    $('#callFunction1_1Button').click(doFeatureSet1_1);
    $('#callFunction1_2Button').click(doFeatureSet1_2);
    $('#callFunction1_3Button').click(doFeatureSet1_3);
    $('#callFunction1_4Button').click(doFeatureSet1_4);
    $('#callFunction2_1Button').click(doFeatureSet2_1);
    $('#callFunction3_1Button').click(doFeatureSet3_1);
});