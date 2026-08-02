/*==================================================
                PROJECTS.JS
==================================================*/

/*==================================================
                PROJECT CARD HOVER
==================================================*/

const projectCards=document.querySelectorAll(".project-card");

projectCards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

        card.style.transition=".35s ease";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});


/*==================================================
                IMAGE ZOOM EFFECT
==================================================*/

const projectImages=document.querySelectorAll(".project-card img");

projectImages.forEach((image)=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.08)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


/*==================================================
                PROJECT CARD ANIMATION
==================================================*/

function animateProjects(){

    projectCards.forEach((card,index)=>{

        const top=card.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-100){

            card.style.opacity="1";

            card.style.transform="translateY(0)";

            card.style.transition=`all .6s ease ${index*0.12}s`;

        }

    });

}

window.addEventListener("scroll",animateProjects);

window.addEventListener("load",animateProjects);


/*==================================================
                LIVE DEMO BUTTON
==================================================*/

document.querySelectorAll(".project-links a:first-child").forEach((button)=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        Toastify({

            text:"Live Demo will be available soon.",

            duration:2500,

            gravity:"top",

            position:"right",

            close:true,

            style:{

                background:"#4F8CFF"

            }

        }).showToast();

    });

});


/*==================================================
                GITHUB BUTTON
==================================================*/

document.querySelectorAll(".project-links a:last-child").forEach((button)=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });

});

/* ==========================
   PROJECT FILTER
========================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.dataset.category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }
});

/*==================================================
                PROJECTS.JS END
==================================================*/