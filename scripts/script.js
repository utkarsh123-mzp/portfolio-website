/*==================================================
            TYPING EFFECT
==================================================*/

const typed = new Typed("#typing-span", {

    strings: [

        "Data Analyst",

        "Python Developer",

        "Power BI Developer",

        "SQL Enthusiast",

        "Computer Science Student"

    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1500,

    loop:true

});


/*==================================================
            NAVIGATION
==================================================*/

const navLinks = document.querySelectorAll(".navlink");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

        const toggle = document.getElementById("menu-toggle");

        if (toggle) {
            toggle.checked = false;
        }

    });

});


/*==================================================
            ACTIVE TAB DEFAULT
==================================================*/

window.addEventListener("DOMContentLoaded",()=>{

    const firstSection=document.querySelector(".content");

    if(firstSection){

        firstSection.classList.add("active");

    }

});


/*==================================================
            HEADER SHADOW
==================================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.boxShadow="none";

    }

});
/*
    });

==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

const revealElements=document.querySelectorAll(

    ".service-card,.project-card,.skill-card,.experience-card,.education-card,.achievement-card,.info-box"

);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight=window.innerHeight;

        const revealTop=element.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);


/*==================================================
            BUTTON RIPPLE EFFECT
==================================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=this.getBoundingClientRect();

        ripple.style.left=e.clientX-rect.left+"px";

        ripple.style.top=e.clientY-rect.top+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*==================================================
            SMOOTH PAGE LOADER
==================================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/*==================================================
            KEYBOARD ACCESSIBILITY
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        const toggle=document.getElementById("menu-toggle");

        if(toggle){

            toggle.checked=false;

        }

    }

});


/*==================================================
            CURRENT YEAR
==================================================*/

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}



/*==================================================
            IMAGE HOVER PRELOAD
==================================================*/

document.querySelectorAll(".project-card img").forEach(img=>{

    img.setAttribute("loading","lazy");

});


/*==================================================
            DISABLE RIGHT CLICK (OPTIONAL)
==================================================*/

// Uncomment if you want to disable right click

/*
document.addEventListener("contextmenu",function(e){

    e.preventDefault();

});
*/


/*==================================================
            PREVENT EMPTY LINKS
==================================================*/

document.querySelectorAll('a[href="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

    });

});


/*==================================================
            INITIALIZE
==================================================*/

window.addEventListener("load",()=>{

    revealOnScroll();

});

/*====================================
      SCROLL TO TOP BUTTON
====================================*/

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*====================================
        PREMIUM LOADER
====================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const progressBar = document.getElementById("progressBar");
    const progressValue = document.getElementById("progressValue");

    let progress = 0;

    const loading = setInterval(() => {

        progress++;

        progressValue.textContent = progress + "%";
        progressBar.style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(loading);

            setTimeout(() => {

                loader.style.transform = "scale(1.08)";
loader.style.filter = "blur(10px)";

setTimeout(() => {
    loader.classList.add("hide");
}, 200);

                setTimeout(() => {

                    loader.remove();

                }, 800);

            }, 300);

        }

    }, 20);

});



/*==================================================
            SCRIPT.JS END
==================================================*/