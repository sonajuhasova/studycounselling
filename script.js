
//common popups
// interviews popup
var popup3 = document.getElementById("interviews");
var btn = document.getElementById("interviews-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup3.style.display = "block";
}
goBack.onclick = function () {
    popup3.style.display = "none";
}

// ask a question popup
var popup4 = document.getElementById("ask");
var btn = document.getElementById("ask-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup4.style.display = "block";
}
goBack.onclick = function () {
    popup4.style.display = "none";
}

// contact popup
var popup5 = document.getElementById("contact");
var btn = document.getElementById("contact-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup5.style.display = "block";
}
goBack.onclick = function () {
    popup5.style.display = "none";
}

