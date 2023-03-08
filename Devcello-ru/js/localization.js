"use strict";

const allLanguages = ["en", "ru"]
let currentLanguageIndex = 0;

const currentPagePathname = window.location.pathname; 
let currentText = {};

let languageButtons = document.querySelectorAll("[data-lang=lang-switch-button],[data-lang=dropdown-lang-switch-button]");

currentLanguageIndex = localStorage.getItem("lang-index");
if (currentLanguageIndex === null) {
    localStorage.setItem("lang-index", "0");
    currentLanguageIndex = 0;
}
else {
    currentLanguageIndex = Number(currentLanguageIndex);
}

setCurrentText();
setPageLanguage(allLanguages[currentLanguageIndex]);

for (let button of languageButtons) {
    button.addEventListener("click", () => {
        currentLanguageIndex++;
        if (currentLanguageIndex >= allLanguages.length) {
            currentLanguageIndex = 0;
        }
        
        localStorage.setItem("lang-index", currentLanguageIndex);
    
        setPageLanguage(allLanguages[currentLanguageIndex]);
    });
}

function setCurrentText() {
    switch (currentPagePathname) {
        case '/about-me.html':
            currentText = data["about-me"];
            break;

        case '/index.html':
            currentText = data["my-projects"];
            break;

        case '/projects/dungeon-master.html':
            currentText = data["dungeon-master"];
            break;

        case '/projects/swipe-driver.html':
            currentText = data["swipe-driver"];
            break;

        case '/projects/dash.html':
            currentText = data["dash"];
            break;

        case '/projects/trickshot.html':
            currentText = data["trickshot"];
            break;

        default:
        	currentText = data["my-projects"];
        	break;
    }
}

function setPageLanguage(language) {
    for (let key in currentText) {
        let elements = document.querySelectorAll(`[data-lang=${key}]`);
        if (elements.length == 0)
            continue;

        for (let elem of elements) {
            elem.innerHTML = currentText[key][language];
        }  
    }
}


