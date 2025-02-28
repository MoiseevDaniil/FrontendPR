document.addEventListener("DOMContentLoaded", () => {
    // Отримати збережену тему з localStorage
    const savedTheme = localStorage.getItem("theme") || "light";

    // Застосувати збережену тему
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Знаходимо кнопку зміни теми
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");

            // Збереження вибраної теми в localStorage
            const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
        });
    }
});