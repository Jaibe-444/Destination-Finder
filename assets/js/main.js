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

// 3. Unified Filtering Function (Combines Text Search & Category)
function filterAndSearch() {
    const query = document.getElementById("destination-input").value.toLowerCase().trim();
    const selectedCategory = document.getElementById("category-select").value;

    const filteredItems = destinationsData.filter(dest => {
        // Check if destination name or address matches typed text
        const matchesText = dest.name.toLowerCase().includes(query) || dest.address.toLowerCase().includes(query);
        
        // Check if destination matches selected category dropdown
        const matchesCategory = selectedCategory === "all" || dest.category === selectedCategory;

        // Both conditions must be true
        return matchesText && matchesCategory;
    });

    renderDestinations(filteredItems);
}

// 4. Run when browser finishes loading the page
document.addEventListener("DOMContentLoaded", () => {
    console.log("DestinationFinder JavaScript loaded successfully!");
    
    // Initial render of all destinations
    renderDestinations(destinationsData);

    // A. Hero Search Form Submit Event (Prevents default page refresh)
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        filterAndSearch();
    });

    // B. Category Dropdown Change Event
    const categorySelect = document.getElementById("category-select");
    categorySelect.addEventListener("change", () => {
        filterAndSearch();
    });

    // C. Left Column Filter Buttons Click Event
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            const category = e.target.getAttribute("data-category");
            
            // Sync dropdown value with the clicked button for harmony
            document.getElementById("category-select").value = category;
            
            filterAndSearch();
        });
    });
});