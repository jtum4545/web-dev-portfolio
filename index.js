const loadingAnimation = document.getElementById("loading-animation");
const page = document.getElementById("page");

page.style.display = "none";

setTimeout(function(){
    loadingAnimation.style.display = "none";
    page.style.display = "block"
}, 3000)