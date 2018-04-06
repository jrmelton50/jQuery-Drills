// Initialize variables
var button = $("#Submit");
var inputArea = $("#inputText");
var $div = $("<div></div>");
var $h2 = $("<h2></h2>");
var $ul = $("<ul></ul>");

// Add listeners 
button.click(makeAlert);                // When the button is clicked, alert the user
inputArea.keypress(enableButton);       // When the user enters data into the text box, enable button
$h2.mouseover(changeBackgroundColorAndRadius);

// Append elements together as needed
$($div).append($h2);
$("body").append($div);

// Problem 11 (replace the h2 with an ul)
$h2.replaceWith($ul);


// Functions used in code above
function makeAlert () {
var $inputArea = $("#inputText");
    var $inputValue = $inputArea.val();
    alert($inputValue);
    // $($h2).append($inputValue);
    var $listItem = $("<li>" + $inputValue + "</li>");
    $listItem.click(changeColor);
    $listItem.dblclick(removeItem);
    $($ul).append($listItem);

}

function enableButton() {
    button.removeAttr("disabled", "disabled");
}

function changeBackgroundColorAndRadius() {
    $h2.css({
        "background-color": "red",
        "border-radius": "5px"
    })
}

function changeColor() {
    var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    var num = Math.floor(Math.random() * colors.length);
    $(this).css("color", colors[num]);
}

function removeItem() {
    $(this).remove();
}