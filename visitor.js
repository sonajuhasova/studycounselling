//pop ups

// about programmes popup
var popup6 = document.getElementById("about");
var btn = document.getElementById("about-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup6.style.display = "block";
}
goBack.onclick = function () {
    popup6.style.display = "none";
}

// faq application popup
var popup7 = document.getElementById("faq-a");
var btn = document.getElementById("faq-a-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup7.style.display = "block";
}
goBack.onclick = function () {
    popup7.style.display = "none";
}
// interviews popup
var popup3 = document.getElementById("interviews2");
var btn = document.getElementById("interviews-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup3.style.display = "block";
}
goBack.onclick = function () {
    popup3.style.display = "none";
}

// ask a question popup
var popup4 = document.getElementById("ask2");
var btn = document.getElementById("ask-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup4.style.display = "block";
}
goBack.onclick = function () {
    popup4.style.display = "none";
}

// contact popup
var popup5 = document.getElementById("contact2");
var btn = document.getElementById("contact-btn");
var goBack = document.getElementsByClassName("go-back")[0];
btn.onclick = function () {
    popup5.style.display = "block";
}
goBack.onclick = function () {
    popup5.style.display = "none";
}

//video
$("#myVideo").bind('ended', function () {
    this.play();
});
