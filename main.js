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
  dropDownContentFt.classList.remove("dropd-ft-show")
  dropDownContentComp.classList.remove("dropd-c-show")
});

navBg.addEventListener("click", () => {

});

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

arrowDownFt = document.createElement("img");
arrowDownFt.src = "images/icon-arrow-down.svg";
arrowDownFt.alt = "icon-down";
document.getElementById("drop-btn-ft").appendChild(arrowDownFt);

const ftBtn = document.getElementById("drop-btn-ft");
const dropDownContentFt = document.getElementById("dropdownContent-ft");

ftBtn.addEventListener("mouseover", () => {
  arrowDownFt.src = "images/icon-arrow-up.svg";
});

ftBtn.addEventListener("mouseleave", () => {
  arrowDownFt.src = "images/icon-arrow-down.svg";
});

dropDownContentFt.addEventListener("mouseover", () => {
  arrowDownFt.src = "images/icon-arrow-up.svg";
});

dropDownContentFt.addEventListener("mouseleave", () => {
  arrowDownFt.src = "images/icon-arrow-down.svg";
});

arrowDownC = document.createElement("img");
arrowDownC.src = "images/icon-arrow-down.svg";
arrowDownC.alt = "icon-down";
document.getElementById("drop-btn-comp").appendChild(arrowDownC);

const companyBtn = document.getElementById("drop-btn-comp");
const dropDownContentComp = document.getElementById("dropdownContent-comp");

companyBtn.addEventListener("mouseover", () => {
  arrowDownC.src = "images/icon-arrow-up.svg";
});

companyBtn.addEventListener("mouseleave", () => {
  arrowDownC.src = "images/icon-arrow-down.svg";
});

dropDownContentComp.addEventListener("mouseover", (e) => {
  arrowDownC.src = "images/icon-arrow-up.svg";
});

dropDownContentComp.addEventListener("mouseleave", () => {
  arrowDownC.src = "images/icon-arrow-down.svg";
});

ftBtn.addEventListener("click", () => {
  dropDownContentFt.classList.toggle("dropd-ft-show")
  dropDownContentComp.classList.remove("dropd-c-show")
  arrowDownFt.src = "images/icon-arrow-down.svg";
})

companyBtn.addEventListener("click", () => {
  dropDownContentComp.classList.toggle("dropd-c-show")
  dropDownContentFt.classList.remove("dropd-ft-show")
  arrowDownC.src = "images/icon-arrow-down.svg";
})

window.onclick = function(event) {
  var sideNav = document.getElementById("dd");;

  if (event.target.contains(sideNav) && event.target !== sideNav) {
    dropDownContentFt.classList.remove("dropd-ft-show")
    dropDownContentComp.classList.remove("dropd-c-show")
  } 
}

