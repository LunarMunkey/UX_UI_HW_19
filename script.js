const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".navUL");
const navItem = document.querySelectorAll(".navItem");
const closeIcon = document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");

function toggleMenu () {
    if (navUL.classList.contains("showMenu")) {
        navUL.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        navUL.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

const home = document.querySelector(".hero");
const projects = document.querySelector(".projects");
const about = document.querySelector(".about");


home.addEventListener("click").scrollIntoView({behavior: 'smooth'});
projects.scrollIntoView({behavior: 'smooth'});

//const hamburger = document.getElementById('hamburger');
//const navUL = document.getElementById('navUL');

//hamburger.addEventListener('click', () => {
//    navUL.classList.toggle('show');
//});

//$("hamburger").on('click', function(){
//    $("navUL").toggle('show');
//});