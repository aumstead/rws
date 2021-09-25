// get radio btns, add change event listeners in order to dynamically render parts of form
const orderedByNodeList = document.querySelectorAll('input[name="ordered-by"]');
const coverageTypeNodeList = document.querySelectorAll(
  'input[name="coverage-type"]'
);

// put these vars in the global namespace
let orderedByValue = null;
let coverageTypeValue = null;

orderedByNodeList.forEach((node) => {
  node.addEventListener("change", () => {
    orderedByValue = document.querySelector(
      'input[name="ordered-by"]:checked'
    ).value;
    if (orderedByValue && coverageTypeValue) {
      console.log("neither is null");
      resetForm();
      renderForm(orderedByValue, coverageTypeValue);
    }
  });
});

coverageTypeNodeList.forEach((node) => {
  node.addEventListener("change", () => {
    coverageTypeValue = document.querySelector(
      'input[name="coverage-type"]:checked'
    ).value;
    if (orderedByValue && coverageTypeValue) {
      console.log("neither is null");
      resetForm();
      renderForm(orderedByValue, coverageTypeValue);
    }
  });
});

// all the form section elements
const buyerInfoGroupEl = document.getElementById("buyer-info-group");
const sellerInfoGroupEl = document.getElementById("seller-info-group");
const buyerAgentInfoEl = document.getElementById("buyer-agent-info");
const listingAgentInfoEl = document.getElementById("listing-agent-info");
const procuringAgentGroupEl = document.getElementById("procuring-agent-group");
const deliverToGroupEl = document.getElementById("deliver-to-group");
const specialOfferEl = document.getElementById("special-offer");

// default value elements
const procuringAgentListingAgentRadioInputEl = document.getElementById(
  "procuring-agent-listing-agent"
);

// validation elements
const buyerAgentOfficeInputEl = document.getElementById(
  "buyer-agent-office-input"
);
const buyerAgentNameInputEl = document.getElementById("buyer-agent-name-input");
const buyerAgentPhoneInputEl = document.getElementById(
  "buyer-agent-phone-input"
);
const buyerAgentEmailInputEl = document.getElementById(
  "buyer-agent-email-input"
);
const buyerAgentOfficeAsteriskEl = document.getElementById(
  "buyer-agent-office-asterisk"
);
const buyerAgentNameAsteriskEl = document.getElementById(
  "buyer-agent-name-asterisk"
);
const buyerAgentPhoneAsteriskEl = document.getElementById(
  "buyer-agent-phone-asterisk"
);
const buyerAgentEmailAsteriskEl = document.getElementById(
  "buyer-agent-email-asterisk"
);
const listingAgentOfficeInputEl = document.getElementById(
  "listing-agent-office-input"
);
const listingAgentNameInputEl = document.getElementById(
  "listing-agent-name-input"
);
const listingAgentPhoneInputEl = document.getElementById(
  "listing-agent-phone-input"
);
const listingAgentEmailInputEl = document.getElementById(
  "listing-agent-email-input"
);
const listingAgentOfficeAsteriskEl = document.getElementById(
  "listing-agent-office-asterisk"
);
const listingAgentNameAsteriskEl = document.getElementById(
  "listing-agent-name-asterisk"
);
const listingAgentPhoneAsteriskEl = document.getElementById(
  "listing-agent-phone-asterisk"
);
const listingAgentEmailAsteriskEl = document.getElementById(
  "listing-agent-email-asterisk"
);
const listingAgentCoverageStartDateEl = document.getElementById(
  "listing-agent-coverage-start-date-div"
);

function renderForm(orderedBy, coverageType) {
  if (orderedBy === "buyer") {
    if (coverageType === "buyer-coverage") {
      buyerInfoGroupEl.classList.remove("hide-element");
      buyerAgentInfoEl.classList.remove("hide-element");
      listingAgentInfoEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      deliverToGroupEl.classList.remove("hide-element");
      specialOfferEl.classList.remove("hide-element");
    } else if (coverageType === "listing-coverage") {
      sellerInfoGroupEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      procuringAgentListingAgentRadioInputEl.checked = true;
      listingAgentInfoEl.classList.remove("hide-element");
      listingAgentCoverageStartDateEl.classList.remove("hide-element");
    } else if (coverageType === "current-home-owner") {
      buyerInfoGroupEl.classList.remove("hide-element");
    } else {
      console.error("Error in renderForm function");
    }
  } else if (orderedBy === "buyer-agent") {
    if (coverageType === "buyer-coverage") {
      buyerInfoGroupEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      buyerAgentInfoEl.classList.remove("hide-element");
      buyerAgentOfficeAsteriskEl.classList.remove("hide-element");
      buyerAgentNameAsteriskEl.classList.remove("hide-element");
      buyerAgentPhoneAsteriskEl.classList.remove("hide-element");
      buyerAgentEmailAsteriskEl.classList.remove("hide-element");
      buyerAgentOfficeInputEl.required = true;
      buyerAgentNameInputEl.required = true;
      buyerAgentPhoneInputEl.required = true;
      buyerAgentEmailInputEl.required = true;
      listingAgentInfoEl.classList.remove("hide-element");
      deliverToGroupEl.classList.remove("hide-element");
    } else if (coverageType === "listing-coverage") {
      sellerInfoGroupEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      procuringAgentListingAgentRadioInputEl.checked = true;
      listingAgentInfoEl.classList.remove("hide-element");
      listingAgentCoverageStartDateEl.classList.remove("hide-element");
    } else if (coverageType === "current-home-owner") {
      buyerInfoGroupEl.classList.remove("hide-element");
    } else {
      console.error("Error in renderForm function");
    }
  } else if (orderedBy === "listing-agent") {
    if (coverageType === "buyer-coverage") {
      buyerInfoGroupEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      buyerAgentInfoEl.classList.remove("hide-element");
      listingAgentInfoEl.classList.remove("hide-element");
      listingAgentOfficeAsteriskEl.classList.remove("hide-element");
      listingAgentNameAsteriskEl.classList.remove("hide-element");
      listingAgentPhoneAsteriskEl.classList.remove("hide-element");
      listingAgentEmailAsteriskEl.classList.remove("hide-element");
      listingAgentOfficeInputEl.required = true;
      listingAgentNameInputEl.required = true;
      listingAgentPhoneInputEl.required = true;
      listingAgentEmailInputEl.required = true;
      deliverToGroupEl.classList.remove("hide-element");
    } else if (coverageType === "listing-coverage") {
      sellerInfoGroupEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      procuringAgentListingAgentRadioInputEl.checked = true;
      listingAgentInfoEl.classList.remove("hide-element");
      listingAgentOfficeAsteriskEl.classList.remove("hide-element");
      listingAgentNameAsteriskEl.classList.remove("hide-element");
      listingAgentPhoneAsteriskEl.classList.remove("hide-element");
      listingAgentEmailAsteriskEl.classList.remove("hide-element");
      listingAgentOfficeInputEl.required = true;
      listingAgentNameInputEl.required = true;
      listingAgentPhoneInputEl.required = true;
      listingAgentEmailInputEl.required = true;
      listingAgentCoverageStartDateEl.classList.remove("hide-element");
    } else if (coverageType === "current-home-owner") {
      buyerInfoGroupEl.classList.remove("hide-element");
    } else {
      console.error("Error in renderForm function");
    }
  } else if (orderedBy === "seller" || "title-company") {
    if (coverageType === "buyer-coverage") {
      buyerInfoGroupEl.classList.remove("hide-element");
      buyerAgentInfoEl.classList.remove("hide-element");
      listingAgentInfoEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      deliverToGroupEl.classList.remove("hide-element");
    } else if (coverageType === "listing-coverage") {
      sellerInfoGroupEl.classList.remove("hide-element");
      procuringAgentGroupEl.classList.remove("hide-element");
      procuringAgentListingAgentRadioInputEl.checked = true;
      listingAgentInfoEl.classList.remove("hide-element");
      listingAgentCoverageStartDateEl.classList.remove("hide-element");
    } else if (coverageType === "current-home-owner") {
      buyerInfoGroupEl.classList.remove("hide-element");
    } else {
      console.error("Error in renderForm function");
    }
  } else {
    console.error("Error in renderForm function");
  }
}

function resetForm() {
  // reset form sections to default
  buyerInfoGroupEl.classList.add("hide-element");
  sellerInfoGroupEl.classList.add("hide-element");
  buyerAgentInfoEl.classList.add("hide-element");
  listingAgentInfoEl.classList.add("hide-element");
  procuringAgentGroupEl.classList.add("hide-element");
  deliverToGroupEl.classList.add("hide-element");
  specialOfferEl.classList.add("hide-element");
  listingAgentCoverageStartDateEl.classList.add("hide-element");

  // reset default values
  procuringAgentListingAgentRadioInputEl.checked = false;

  // reset validation rule elements
  buyerAgentOfficeAsteriskEl.classList.add("hide-element");
  buyerAgentNameAsteriskEl.classList.add("hide-element");
  buyerAgentPhoneAsteriskEl.classList.add("hide-element");
  buyerAgentEmailAsteriskEl.classList.add("hide-element");
  buyerAgentOfficeInputEl.required = false;
  buyerAgentNameInputEl.required = false;
  buyerAgentPhoneInputEl.required = false;
  buyerAgentEmailInputEl.required = false;
  listingAgentOfficeAsteriskEl.classList.add("hide-element");
  listingAgentNameAsteriskEl.classList.add("hide-element");
  listingAgentPhoneAsteriskEl.classList.add("hide-element");
  listingAgentEmailAsteriskEl.classList.add("hide-element");
  listingAgentOfficeInputEl.required = false;
  listingAgentNameInputEl.required = false;
  listingAgentPhoneInputEl.required = false;
  listingAgentEmailInputEl.required = false;
}

// Handle Calculating Pricing and square footage
const sqFtEl = document.getElementById("square-footage");
const totalCostEl = document.getElementById("total-cost");

sqFtEl.addEventListener("focusout", (e) => {
  let cost = calculateCost(e);
  totalCostEl.innerHTML = `$${cost}`;
});

function calculateCost(e) {
  let sqFt = e.target.value;
  let totalCost = 0;

  if (sqFt < 1500) {
    totalCost = 470;
  } else if (sqFt <= 2500) {
    totalCost = 550;
  } else if (sqFt <= 3000) {
    totalCost = 610;
  } else if (sqFt <= 4000) {
    totalCost = 660;
  } else if (sqFt <= 5000) {
    totalCost = 850;
  } else if (sqFt <= 6000) {
    totalCost = 1060;
  } else if (sqFt <= 9999) {
    totalCost = (sqFt * 0.2).toFixed(2);
  } else {
    console.error("Error in calculateCost function");
  }
  return totalCost;
}
