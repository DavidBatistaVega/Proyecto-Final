function initialize() {
    const headerMenuIcon = document.getElementById("header-menu-icon");
    headerMenuIcon.addEventListener("click", showSideMenu);

    const headerMenuX = document.getElementById("header-menu-cross");
    headerMenuX.addEventListener("click", closeSideMenu);
}

function showSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("side-menu-open");
    sideMenu.classList.remove("side-menu-close");
}

function closeSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("side-menu-close");
    sideMenu.classList.remove("side-menu-open");
}

initialize();

