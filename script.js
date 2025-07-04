document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector(".burger-button");
    const mainNav = document.getElementById("main-nav");

    burgerButton.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !isExpanded);
        mainNav.setAttribute("aria-expanded", !isExpanded);

        // Блокировка скролла при открытом меню
        document.body.style.overflow = isExpanded ? "auto" : "hidden";
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll(".nav_list .list_link");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            burgerButton.setAttribute("aria-expanded", "false");
            mainNav.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "auto";
        });
    });
});

const form = document.getElementById("contactForm");
const status = form.querySelector(".form_status");
const button = form.querySelector(".form_btn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";

    setTimeout(() => {
        status.textContent = "❌ Что-то пошло не так. Попробуйте позже.";
        status.style.color = "#f0145a";
        status.hidden = false;

        button.disabled = false;
        button.textContent = "Send message";
    }, 1500);
});
