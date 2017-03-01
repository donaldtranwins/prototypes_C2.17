// Answer the questions here:

// - What do you think is going to happen?
//      I think nothing will happen because my child selector or my function will mess up.
// - What happened?
//      Nothing happened!  But I dont know why (is it my function or my child selector?)
// - Why?
//      Let me figure that out...
//      --Edit: I found out why: I didnt have my click handler inside my document ready. I made the changes.
//========== Write your code below ===========//

// ######### Feature Set 1 #########
$(document).ready(function(){
    $('#list').on('click','button', function(){
        console.log($(this).text()); //found out this was actually what FS3 is asking
    });
});

// ######### Feature Set 2 #########
// - What do you think is going to happen?;
//      -newButton will create.  -The click handler from FS1 will apply to newButton.  -When newButton is clicked, the console will log the text of newButton.
// - What happened?
//      See above
// - Why?
//      The append() function added newButton5 to #list.  #list has a delegated click handler for any <button> within it.  Therefore newButton5 will have the click handler on it.
$(document).ready(function () {
    var newLi = $('<li>');
    var newButton = $('<button>',{
        style: "margin-top: 10px",
        text: "Delegated Button #5 Handler"
    });
    newButton.appendTo(newLi);
    $('#list').append(newLi);
});

// ######### Feature Set 3 #########
$(document).ready(function() {
    $('#list').on('click', 'button', function () {
        console.log($(this).text() + " was clicked, via the delegated event handler");
    })
});


// ######### Feature Set CHALLENGE #########

$(document).ready(function(){
    var buttonGoogle = $('<button>',{
        text: "Google",
        onclick: "window.open('https://www.google.com')"
    });
    $('body').append(buttonGoogle);
    $('button').on('click',function(){
       if ($(this).attr("style")=="margin-top: 10px"){
           openGoogle(); //calls function in my window scope
           console.log('CHALLENGE FS triggered!  Button contains \'style="margin-top: 10px"\'')
       }
    });
});
function openGoogle(){
    window.open("https://www.google.com")
}