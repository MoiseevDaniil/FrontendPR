document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme") || "light";


    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }


    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");


            const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
        });
    }
});
