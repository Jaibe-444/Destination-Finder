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
    container.innerHTML = "";

    if (items.length === 0) {
        container.innerHTML = `<p class="text-muted text-center py-4">No destinations found matching your criteria.</p>`;
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
}

// 3. Function to Filter Destinations by Category
function filterDestinations(category) {
    if (category === "all") {
        renderDestinations(destinationsData);
    } else {
        // .filter() creates a new array containing only items that match the category
        const filteredItems = destinationsData.filter(dest => dest.category === category);
        renderDestinations(filteredItems);
    }
}

// 4. Run when browser finishes loading the page
document.addEventListener("DOMContentLoaded", () => {
    console.log("DestinationFinder JavaScript loaded successfully!");
    
    // Initial render
    renderDestinations(destinationsData);

    // Attach click event listeners to all filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add 'active' class to the clicked button for visual feedback
            e.target.classList.add("active");

            // Extract category name and run filter function
            const category = e.target.getAttribute("data-category");
            filterDestinations(category);
        });
    });
});