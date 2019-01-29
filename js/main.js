"use strict";
var clickEvent = "ontouchstart" in window ? "touchend" : "click",
    classMethods = ["remove", "add"];
function vanillajQuery(id, textArr, className) {
    var el = document.getElementsByTagName("html")[0];
    var acbox = document.getElementById(id),
        textNode = acbox.firstChild,
        toggled = false;
    acbox.addEventListener(
        clickEvent,
        function() {
            var selector = Number((toggled = !toggled));
            textNode.data = textArr[selector];
            el.classList[classMethods[selector]](className);
        },
        false
    );
}
// function addDarkControl() {
//     vanillajQuery("darkmode", ["Dark mode", "Normal mode"], "dark-mode");
// }
function addLeetControl() {
    vanillajQuery("leet-mode", ["View in Leet Mode", "View in Minimal Mode"], "leet-mode");
}

function getSkiData(id) {
    const uri = "https://snowreporting.herokuapp.com/feed";
    $.ajax({
        url: uri,
        method: "GET",
        crossDomain: true,
        data: {
            resortId: 80
        }
    }).done(function(responseObject){

    });
}

addLeetControl();
// addDarkControl();

window.onblur=function(){
    document.title="Zoe says come back!";
}
window.onfocus=function(){
    document.title="Zoe McDaniel";
}
