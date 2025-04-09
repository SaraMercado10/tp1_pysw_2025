document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".article-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            }
        });
    }, { threshold: 0.2 });

    articles.forEach((article) => observer.observe(article));
});