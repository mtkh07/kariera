// ===================================
// KARIERA - Homepage JavaScript
// ===================================

// 1. Get the HTML elements
const offersContainer = document.getElementById("offers-container");
const domainFilter = document.getElementById("domain-filter");
const locationFilter = document.getElementById("location-filter");
const contractFilter = document.getElementById("contract-filter");
const searchButton = document.getElementById("search-button");

// 2. Create a container for the offer cards
// This keeps the "Latest Opportunities" heading.
const offersList = document.createElement("div");
offersList.classList.add("offers-list");
offersContainer.appendChild(offersList);

function displayOffers(offersToDisplay) {
  // Clear the previous offer cards
  offersList.innerHTML = "";

  // Show a message if no offers match
  if (offersToDisplay.length === 0) {
    const message = document.createElement("p");
    message.classList.add("no-results");
    message.textContent = "No opportunities found. Try changing your filters.";
    offersList.appendChild(message);
    return;
  }

  // Create one card for each offer
  offersToDisplay.forEach(function (offer) {
    const offerCard = document.createElement("div");
    offerCard.classList.add("offer-card");

    const title = document.createElement("h3");
    title.classList.add("offer-title");
    title.textContent = offer.title;

    const company = document.createElement("p");
    company.classList.add("offer-company");
    company.textContent = offer.company;

    const details = document.createElement("p");
    details.classList.add("offer-details");
    details.textContent = offer.city + " | " + offer.domain;

    const contract = document.createElement("span");
    contract.classList.add("offer-badge");
    contract.textContent = offer.contractType;

    const description = document.createElement("p");
    description.classList.add("offer-description");
    description.textContent = offer.description;

    const applyLink = document.createElement("a");
    applyLink.classList.add("apply-button");
    applyLink.textContent = "Apply Now";
    applyLink.href = "apply.html?id=" + offer.id;

    // Add all elements to the card
    offerCard.appendChild(title);
    offerCard.appendChild(company);
    offerCard.appendChild(details);
    offerCard.appendChild(contract);
    offerCard.appendChild(description);
    offerCard.appendChild(applyLink);

    // Add the card to the offers list
    offersList.appendChild(offerCard);
  });
}
