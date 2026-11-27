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
