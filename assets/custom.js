document.addEventListener("DOMContentLoaded", function(){
const section = document.getElementById("local-packages-section");

if(window.innerWidth <= 768) {
section.setAttribute("data-aos","fade-up");
} else {
section.setAttribute("data-aos","fade-left");
}


});