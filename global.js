// Mobile nav JS
const openMobileNavEl = document.getElementById("toggle-mobile-nav");
const closeMobileNavEl = document.getElementById("mobile-close");
const sideNavEl = document.getElementById("side-nav");

openMobileNavEl.addEventListener("click", () => {
  sideNavEl.classList.add("show-mobile-nav");
});
closeMobileNavEl.addEventListener("click", () => {
  sideNavEl.classList.remove("show-mobile-nav");
});
window.addEventListener("resize", handleWindowResize);

function handleWindowResize() {
  let width = window.innerWidth;
  if (width > 990) {
    sideNavEl.classList.remove("show-mobile-nav");
  }
}

// Navbar dropdowns
const warrantyPlansDropdownNavItemEl = document.getElementById(
  "warranty-plans-dropdown-nav-item"
);
const warrantyPlansDropdownMenuEl = document.getElementById(
  "warranty-plans-dropdown-menu"
);
const purchaseDropdownNavItemEl = document.getElementById(
  "purchase-dropdown-nav-item"
);
const purchaseDropdownMenuEl = document.getElementById(
  "purchase-dropdown-menu"
);

warrantyPlansDropdownNavItemEl.addEventListener("mouseover", () => {
  warrantyPlansDropdownMenuEl.classList.remove("hide-element");
});

warrantyPlansDropdownMenuEl.addEventListener("mouseout", () => {
  warrantyPlansDropdownMenuEl.classList.add("hide-element");
});

warrantyPlansDropdownNavItemEl.addEventListener("mouseout", () => {
  warrantyPlansDropdownMenuEl.classList.add("hide-element");
});

purchaseDropdownNavItemEl.addEventListener("mouseover", () => {
  purchaseDropdownMenuEl.classList.remove("hide-element");
});
purchaseDropdownMenuEl.addEventListener("mouseout", () => {
  purchaseDropdownMenuEl.classList.add("hide-element");
});
purchaseDropdownNavItemEl.addEventListener("mouseout", () => {
  purchaseDropdownMenuEl.classList.add("hide-element");
});

// Mobile nav dropdowns
let mobilePlansDropdownState = false;
let mobilePurchaseDropdownState = false;

const mobilePlansDropdownLiEl = document.getElementById(
  "mobile-plans-dropdown-nav-item"
);
const mobilePlansDropdownMenuEl = document.getElementById(
  "mobile-plans-dropdown-menu"
);
const mobilePurchaseDropdownLiEl = document.getElementById(
  "mobile-purchase-dropdown-nav-item"
);
const mobilePurchaseDropdownMenuEl = document.getElementById(
  "mobile-purchase-dropdown-menu"
);

mobilePlansDropdownLiEl.addEventListener("click", () => {
  if (mobilePlansDropdownState) {
    mobilePlansDropdownState = false;
    mobilePlansDropdownMenuEl.classList.add("hide-element");
  } else {
    mobilePlansDropdownState = true;
    mobilePlansDropdownMenuEl.classList.remove("hide-element");
  }
});

mobilePurchaseDropdownLiEl.addEventListener("click", () => {
  if (mobilePurchaseDropdownState) {
    mobilePurchaseDropdownState = false;
    mobilePurchaseDropdownMenuEl.classList.add("hide-element");
  } else {
    mobilePurchaseDropdownState = true;
    mobilePurchaseDropdownMenuEl.classList.remove("hide-element");
  }
});
