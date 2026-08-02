/*==================================================
                ABOUT SECTION
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
                TAB SWITCHING
    ==========================================*/

    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            tab.classList.add("active");

            const target = document.getElementById(tab.dataset.section);

            if(target){

                target.classList.add("active");

            }

        });

    });

    /*==========================================
                HOVER EFFECT
    ==========================================*/

    const cards = document.querySelectorAll(
        ".timeline-card, .skill-card, .certificate-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*==========================================
                SCROLL REVEAL
    ==========================================*/

    const revealItems = document.querySelectorAll(
        ".timeline-card, .skill-card, .certificate-card"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold:0.15

    });

    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition = "all .7s ease";

        observer.observe(item);

    });

    /*==========================================
                SIDEBAR FADE
    ==========================================*/

    const sidebar = document.querySelector(".about-sidebar");

    if(sidebar){

        sidebar.style.opacity = "0";

        sidebar.style.transform = "translateX(-30px)";

        sidebar.style.transition = ".8s ease";

        setTimeout(() => {

            sidebar.style.opacity = "1";

            sidebar.style.transform = "translateX(0)";

        }, 250);

    }

});