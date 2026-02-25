/* ================= DOM READY ================= */
document.addEventListener("DOMContentLoaded", () => {

/* ===== NAV FADE TRANSITION ===== */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        document.body.classList.add("fade-transition");

        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                document.body.classList.remove("fade-transition");
            }, 400);

        }, 200);

    });
});


document.body.classList.add("page-loaded");
    /* ================= HAMBURGER ================= */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Auto close menu when link clicked (mobile improvement)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    /* ================= CURSOR GLOW ================= */
    const cursorGlow = document.querySelector(".cursor-glow");
    document.addEventListener("mousemove", (e) => {
        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";
    });

    /* ================= TYPING EFFECT ================= */
    const roles = [
        "Java Backend Developer",
        "Spring Boot Developer",
        "REST API Developer"
    ];

    const typingElement = document.getElementById("typing");
    let roleIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentRole.length) {
                setTimeout(() => isDeleting = true, 1000);
            }
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, isDeleting ? 40 : 80);
    }

    typeEffect();

    /* ================= SCROLL REVEAL + COUNTER ================= */
    const reveals = document.querySelectorAll(".reveal");
    const counters = document.querySelectorAll(".counter");
    const aboutSection = document.querySelector("#about");

    let counterStarted = false;

    function handleScroll() {

        // Reveal Animation
        reveals.forEach((element) => {
            const revealTop = element.getBoundingClientRect().top;
            if (revealTop < window.innerHeight - 120) {
                element.classList.add("active");
            }
        });

        // Counter Animation (run once)
        if (!counterStarted) {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 150) {
                startCounter();
                counterStarted = true;
            }
        }
    }

    function startCounter() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 60;

            function updateCounter() {
                if (count < target) {
                    count += increment;
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }

            updateCounter();
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

});

/* ================= LOAD AT TOP ================= */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.onload = () => window.scrollTo(0, 0);


// Make the cursor follow the mouse
const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', e => {
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.left = e.clientX + 'px';
});