document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("nav, section, footer"); // Kasama na ang navbar

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100");
                    entry.target.classList.remove("opacity-0");
                } else {
                    entry.target.classList.add("opacity-0"); // Magiging invisible ulit kapag lumabas sa viewport
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
});