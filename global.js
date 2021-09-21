// Mobile nav JS
const toggleEl = document.getElementById("toggle-mobile-nav");
const sideNavEl = document.getElementById("side-nav");
let toggleState = false;
toggleEl.addEventListener("click", handleToggleNavClick);
window.addEventListener("resize", handleWindowResize);

function handleToggleNavClick() {
  if (toggleState) {
    sideNavEl.classList.remove("show-mobile-nav");
    toggleState = false;
  } else {
    sideNavEl.classList.add("show-mobile-nav");
    toggleState = true;
  }
}

function handleWindowResize() {
  let width = window.innerWidth;
  if (width > 990) {
    sideNavEl.classList.remove("show-mobile-nav");
    toggleState = false;
  }
}
