const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
    nav.classList.add("open-nav");
});
close.addEventListener("click", function () {
    nav.classList.remove("open-nav");
});

const featuresDropdown = document.querySelector(".dropdown-link1")
const dropdownLInk1 = document.querySelector(".features-dropdown-content")
featuresDropdown.addEventListener('click', function () {
    dropdownLInk1.classList.toggle('open-menu1')
})

const companyDropdown = document.querySelector(".dropdown-link2")
const dropdownLInk2 = document.querySelector(".company-dropdown-content")
companyDropdown.addEventListener('click', function () {
    dropdownLInk2.classList.toggle('open-menu2')
})
