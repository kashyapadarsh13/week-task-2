document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    const updateButtons = document.querySelectorAll(".update-btn");
    
    const healthScores = {
        exercise: 0,
        hydration: 0,
        meditation: 0
    };

    // Initialize Progress Bars
    progressBars.forEach((bar) => {
        setTimeout(() => {
            bar.style.width = Math.floor(Math.random() * 100) + "%";
        }, 500);
    });

    // Update Health Progress Correctly
    updateButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-health");
            let newProgress = Math.floor(Math.random() * 100);
            
            // Update only that habit's health score
            healthScores[category] = newProgress;
            document.getElementById(`${category}-progress`).style.width = newProgress + "%";
            document.getElementById(`${category}-health`).textContent = newProgress;
        });
    });

    // Navbar Toggle for Mobile
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
    });
});