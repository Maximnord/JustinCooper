const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.querySelector('body');


window.addEventListener("scroll", ()=> {
            let head = document.querySelector(".goup");
            head.classList.toggle("jopa", window.scrollY > 1000);
        });

        