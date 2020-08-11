"use strict";
let clickEvent = "ontouchstart" in window ? "touchend" : "click";
let classMethods = ["remove", "add"];
function vanillajQuery(id, textArr, className) {
    let pageElements = document.getElementsByTagName("html")[0];
    let acbox = document.getElementById(id);
    let textNode = acbox.firstChild;
    let toggled = false;
    acbox.addEventListener(
        clickEvent,
        function() {
            let selector = Number((toggled = !toggled));
            textNode.data = textArr[selector];
            pageElements.classList[classMethods[selector]](className);
        },
        false
    );
}
function addLeetControl() {
    vanillajQuery("leet-mode", ["View in Leet Mode", "View in Minimal Mode"], "leet-mode");
}

addLeetControl();

window.onblur=function(){
    document.title="Zoe says come back!";
}
window.onfocus=function(){
    document.title="Zoe McDaniel";
}
