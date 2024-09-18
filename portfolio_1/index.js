let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

function opentab(tab){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tab).classList.add("active-tab")
}

let sideMenu = document.getElementById("side-menu")
function openmenu(){
    sideMenu.style.right = "0"
}

function closemenu(){
    sideMenu.style.right = "-200px"
}
