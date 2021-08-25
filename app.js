const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const header_text = document.getElementById("header_text");
const mountains_front = document.getElementById("mountains_front");




window.addEventListener("scroll", function(){
    let value = this.scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 0.1 + "%";
    mountains_front.style.top = value * 0.06 + "%";
    header_text.style.opacity = 1 - ( value * 0.003 );
})