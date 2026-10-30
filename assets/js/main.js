// Mock Database of Destinations with London Coordinates
const destinationsData = [
    {
        id: 1,
        name: "The Sherlock Holmes Museum",
        category: "attractions",
        address: "221b Baker St, London",
        rating: 4.6,
        reviews: 3420,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
        lat: 51.5237,
        lng: -0.1585
    },
    {
        id: 2,
        name: "The Ritz London Hotel",
        category: "lodging",
        address: "150 Piccadilly, London",
        rating: 4.8,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
        lat: 51.5073,
        lng: -0.1416
    },
    {
        id: 3,
        name: "Dishoom Covent Garden",
        category: "restaurants",
        address: "12 Upper St Martin's Ln, London",
        rating: 4.7,
        reviews: 4800,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
        lat: 51.5132,
        lng: -0.1245
    }
];

// Global Map Variables
let map;
let markers = [];

// Google Maps Initialization Function (Called by Google Maps Script API callback)
window.initMap = function() {
    // Central London coordinates (Baker Street / Marylebone area focus)
    const centralLondon = { lat: 51.5150, lng: -0.1450 };

    // Create the map inside the #map div
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: centralLondon,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    });

    // Render initial markers on map load
    updateMapMarkers(destinationsData);
};

// Function to Render Destination Cards Dynamically
function renderDestinations(items) {
    const container = document.getElementById("results-container");
    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = `<p class="text-muted text-center py-4">No destinations found matching your criteria.</p>`;
        updateMapMarkers([]); // Clear map markers too
        return;
    }

    items.forEach(dest => {
        const cardHTML = `
            <div class="card mb-3 shadow-sm border-0">
                <div class="row g-0">
                    <div class="col-4">
                        <img src="${dest.image}" class="img-fluid rounded-start h-100 object-fit-cover" alt="${dest.name}">
                    </div>
                    <div class="col-8">
                        <div class="card-body py-2 px-3">
                            <h5 class="card-title fw-bold fs-6 mb-1">${dest.name}</h5>
                            <p class="text-muted small mb-1"><i class="bi bi-geo-alt text-danger me-1"></i>${dest.address}</p>
                            <div class="mb-2">
                                <span class="badge bg-warning text-dark">★ ${dest.rating}</span>
                                <span class="text-muted small ms-1">(${dest.reviews} reviews)</span>
                            </div>
                            <a href="#packages" class="btn btn-sm btn-outline-primary py-0">View Deal</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    // Update map markers to match currently displayed items
    updateMapMarkers(items);
}

// Function to Update Google Map Markers
function updateMapMarkers(items) {
    // Safety check: ensure Google Maps library is loaded before running
    if (!window.google || !map) return;

    // Clear existing markers from the map
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Create new markers for each filtered destination
    items.forEach(dest => {
        const marker = new google.maps.Marker({
            position: { lat: dest.lat, lng: dest.lng },
            map: map,
            title: dest.name,
            animation: google.maps.Animation.DROP
        });

        // Optional: Add info window on click
        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="padding: 5px;"><strong>${dest.name}</strong><br><small>${dest.address}</small></div>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        markers.push(marker);
    });
}

//Unified Filtering Function (Combines Search & Category)
function filterAndSearch() {
    const query = document.getElementById("destination-input").value.toLowerCase().trim();
    const selectedCategory = document.getElementById("category-select").value;

    const filteredItems = destinationsData.filter(dest => {
        const matchesText = dest.name.toLowerCase().includes(query) || dest.address.toLowerCase().includes(query);
        const matchesCategory = selectedCategory === "all" || dest.category === selectedCategory;
        return matchesText && matchesCategory;
    });

    renderDestinations(filteredItems);
}

// Run when browser finishes loading the page
document.addEventListener("DOMContentLoaded", () => {
    console.log("DestinationFinder JavaScript loaded successfully!");
    
    // Initial render
    renderDestinations(destinationsData);

    // Hero Form Submit Event
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        filterAndSearch();
    });

    // Category Dropdown Change Event
    const categorySelect = document.getElementById("category-select");
    categorySelect.addEventListener("change", () => {
        filterAndSearch();
    });

    // Left Column Filter Buttons Click Event
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            const category = e.target.getAttribute("data-category");
            document.getElementById("category-select").value = category;
            
            filterAndSearch();
        });
    });
});