// click events for buttons
const portfolio = document.getElementById("portfolio")
const portfolioBtn = document.getElementById("portfolio-btn")
const skills = document.getElementById("skills")
const skillsBtn = document.getElementById("skills-btn")

portfolioBtn.addEventListener("click", (event) => {
    skills.style.display = "none";
    portfolio.style.display = "flex";
    skillsBtn.classList.remove("active-btn");
    portfolioBtn.classList.add("active-btn");
})

skillsBtn.addEventListener("click", (event) => {
    portfolio.style.display = "none";
    skills.style.display = "flex";
    portfolioBtn.classList.remove("active-btn");
    skillsBtn.classList.add("active-btn");
})

//Light and Dark
document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const themeIcon = document.querySelector('img[alt="theme icon"]');
    const githubLogo = document.querySelector('img[alt="github logo"]');
    const xLogo = document.querySelector('img[alt="x logo"]');
    const emailLogo = document.querySelector('img[alt="email logo"]');

    const lightlogos = {
        github: "assets/github_light.png",
        twitter: "assets/twitter-logo-light.jpg",
        email: "assets/email_light.png",
        theme: "assets/theme_light.png",
    }

    const darklogos = {
        github: "assets/github_dark.png",
        twitter: "assets/twitter-logo-dark.jpg",
        email: "assets/email_dark.png",
        theme: "assets/theme_dark.png",
    }

    function setTheme(isDark) {
        githubLogo.src = isDark ? darklogos.github : lightlogos.github;

        xLogo.src = isDark ? darklogos.twitter : lightlogos.twitter;

        emailLogo.src = isDark ? darklogos.email : lightlogos.email;

        themeIcon.src = isDark ? darklogos.theme : lightlogos.theme;
    }

    toggleThemeButton.addEventListener("click", () => {
        const isDark=document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);

        setTheme(isDark);
    });

    const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true"
        document.body.classList.toggle("dark-them", isDark)

        setTheme(isDark);
    };
    loadTheme();
});
//Deployed using Netlify and available on:https://rebokilesello.netlify.app/