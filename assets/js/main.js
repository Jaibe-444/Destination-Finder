// 1. Mock Database of Destinations (London Focus)
const destinationsData = [
    {
        id: 1,
        name: "The Sherlock Holmes Museum",
        category: "attractions",
        address: "221b Baker St, London",
        rating: 4.6,
        reviews: 3420,
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "The Ritz London Hotel",
        category: "lodging",
        address: "150 Piccadilly, London",
        rating: 4.8,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Dishoom Covent Garden",
        category: "restaurants",
        address: "12 Upper St Martin's Ln, London",
        rating: 4.7,
        reviews: 4800,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80"
    }
];

// 2. Function to Render Destination Cards Dynamically
function renderDestinations(items) {
    const container = document.getElementById("results-container");
    
    // Clear the container first so we don't duplicate items
    container.innerHTML = "";

    // If no items match, show a friendly message
    if (items.length === 0) {
        container.innerHTML = `<p class="text-muted text-center py-4">No destinations found matching your criteria.</p>`;
        return;
    }

    // Loop through each destination object and create HTML template strings
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
        // Append each card to our results container
        container.innerHTML += cardHTML;
    });
}

// 3. Run when browser finishes loading the page
document.addEventListener("DOMContentLoaded", () => {
    console.log("DestinationFinder JavaScript loaded successfully!");
    
    // Render all destinations on initial page load
    renderDestinations(destinationsData);
});