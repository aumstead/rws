// Hero text animation JS
const spanEl = document.getElementById("hero-anim");
let count = 0;
heroTextAnimation();

const texts = ["Lorem Warranty", "Lorem Safety", "Lorem Coverage"];

function heroTextAnimation() {
  setInterval(() => {
    if (count > 2) count = 0;
    spanEl.classList.remove("animate-hero-text");
    spanEl.innerText = texts[count];
    count++;
    setTimeout(() => {
      spanEl.classList.add("animate-hero-text");
    }, 100);
  }, 5200);
}

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
