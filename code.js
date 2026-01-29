const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const partnersBtn = document.getElementById("partnersBtn");

const homeSection = document.getElementById("home");
const jetSection = document.getElementById("jet");
const botSection = document.getElementById("bot");
const droidSection = document.getElementById("droid");
const covSection = document.getElementById("cov");
const aboutPage = document.getElementById("aboutPage");
const partnersPage = document.getElementById("partnersPage");

function showHome() {
    homeSection.classList.remove("hidden");
    jetSection.classList.remove("hidden");
    botSection.classList.remove("hidden");
    droidSection.classList.remove("hidden");
    covSection.classList.remove("hidden");
    aboutPage.classList.add("hidden");
    partnersPage.classList.add("hidden");
    window.scrollTo(0, 0);
}

function showAbout() {
    homeSection.classList.add("hidden");
    jetSection.classList.add("hidden");
    botSection.classList.add("hidden");
    droidSection.classList.add("hidden");
    covSection.classList.add("hidden");
    aboutPage.classList.remove("hidden");
    partnersPage.classList.add("hidden");
    window.scrollTo(0, 0);
}

function showPartners() {
    homeSection.classList.add("hidden");
    jetSection.classList.add("hidden");
    botSection.classList.add("hidden");
    droidSection.classList.add("hidden");
    covSection.classList.add("hidden");
    aboutPage.classList.add("hidden");
    partnersPage.classList.remove("hidden");
    window.scrollTo(0, 0);
}

homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showHome();
});

aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showAbout();
});

partnersBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showPartners();
});