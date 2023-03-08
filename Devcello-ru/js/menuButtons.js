"use strict";

let menuButton = document.getElementById("menu-button");
let dropdownMenu = document.getElementById("dropdown-menu");
let menuOpened = false;

menuButton.addEventListener("click", () => {
    let state = menuOpened 
        ? "none" 
        : "flex";
    dropdownMenu.style.display = state;

    menuOpened = !menuOpened;
});