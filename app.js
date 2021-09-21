var btntranslate = document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txt-input");
btntranslate.addEventListener("click", clickHandler);

function clickHandler() {
        console.log("clicked");
        console.log("Input: ", txtInput.value);
};
