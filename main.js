function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeFunc() {
  myFunction();
}
const iconMenu = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-btn");
const navBg = document.getElementById("nav-bg");

iconMenu.addEventListener("click", () => {
  navBg.style.width = "100%";
  navBg.style.height = "100%";
  navBg.style.opacity = "0.7";
});

closeIcon.addEventListener("click", () => {
  navBg.style.width = "0%";
  navBg.style.height = "0%";
  navBg.style.opacity = "0";
  dropDownContentFt.classList.remove("dropd-ft-show");
  dropDownContentComp.classList.remove("dropd-c-show");
  chevronComp.classList.remove("fa-chevron-up");
  chevronFt.classList.remove("fa-chevron-up");
});

navBg.addEventListener("click", () => {});

function navBgNone(x) {
  if (x.matches) {
    // If media query matches
    navBg.style.width = "0%";
    navBg.style.height = "0%";
    navBg.style.opacity = "0";
  } else {
    return false;
  }
}

x = window.matchMedia("(min-width: 880px)");
navBgNone(x); // Call listener function at run time
x.addListener(navBgNone); // Attach listener function on state changes

const ftBtn = document.getElementById("drop-btn-ft");
const dropDownContentFt = document.getElementById("dropdownContent-ft");
const chevronFt = document.getElementById("chevronFt");
const companyBtn = document.getElementById("drop-btn-comp");

ftBtn.addEventListener("click", () => {
  dropDownContentFt.classList.toggle("dropd-ft-show");
  dropDownContentComp.classList.remove("dropd-c-show");
  chevronFt.classList.toggle("fa-chevron-up");
  chevronComp.classList.remove("fa-chevron-up");
});

const dropDownContentComp = document.getElementById("dropdownContent-comp");
const chevronComp = document.getElementById("chevronComp");

companyBtn.addEventListener("click", () => {
  dropDownContentComp.classList.toggle("dropd-c-show");
  dropDownContentFt.classList.remove("dropd-ft-show");
  chevronComp.classList.toggle("fa-chevron-up");
  chevronFt.classList.remove("fa-chevron-up");
});


