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

// 2. Run test when browser finishes loading the page
document.addEventListener("DOMContentLoaded", () => {
    console.log("DestinationFinder JavaScript loaded successfully!");
    console.log("Total mock destinations loaded:", destinationsData.length);
});