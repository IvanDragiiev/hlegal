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
