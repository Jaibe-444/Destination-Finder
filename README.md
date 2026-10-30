# Destination-Finder
Holiday Destination Finder
# DestinationFinder - Holiday Destination Finder

DestinationFinder is an interactive web application designed to help users search for and discover their next ideal holiday destination. By combining responsive design, structured layouts, and interactive mapping foundations, the platform provides an engaging user experience for travelers while connecting them with curated travel packages and sponsored listings.

---

## 🎯 Project Goals

### External User's Goal
Find and explore top travel destinations, attractions, accommodations, and dining options tailored to their personal holiday needs.

### Site Owner's Goal
Encourage user engagement and monetize through affiliate link clicks, travel package bookings, and sponsored destination listings.

---

## 👤 User Stories & Progress

### Completed (Phase 1: Foundation & Layout)
- ** Responsive Foundation & Wireframing:** As a developer, I want a clean HTML5 and CSS3 layout built with Bootstrap 5 and Google Fonts so the site scales smoothly across mobile, tablet, and desktop.
- ** Project Documentation & Structure:** As a student, I want a professional file structure, `.gitignore`, and detailed README for school project submission.

### Upcoming (Phase 2: Functionality & APIs)
- ** City Search Logic:** As a user, I want to search for a city to filter destinations.
- ** Category Filtering:** As a traveler, I want to filter results by Attractions, Stays, and Food.
- ** Google Maps & Places API Integration:** As a user, I want an interactive map displaying location pins based on my search.
- ** Sponsored Travel Packages:** As the site owner, I want promotional package cards clearly displayed for conversion tracking.

---

## 🛠️ Technology Stack (So Far)
- **HTML5:** Semantic structural markup.
- **CSS3:** Custom styles, card hover effects, and scrollable containers.
- **Bootstrap 5.3:** Responsive grid system and UI components.
- **Google Fonts:** *Montserrat* (Headings) and *Open Sans* (Body text).
- **Bootstrap Icons:** Clean iconography.

- ## 💡 Technical Explanation & Techniques Used

### A. HTML Structure Block-by-Block

1. **Meta & Fonts (`<head>`)**
   - **Technique:** Google Fonts (`Montserrat` for titles, `Open Sans` for standard text) + Bootstrap CDN.
   - **Why:** Using Google Fonts makes the project look professionally designed (academic criteria for presentation), while Bootstrap 5 gives us responsive grids right out of the box without writing hundreds of custom CSS lines.

2. **Navigation Bar (`<nav>`)**
   - **Technique:** Bootstrap `navbar-expand-lg`, `navbar-dark`, and `sticky-top`.
   - **Why:** `sticky-top` keeps the header menu anchored at the top of the browser screen while scrolling. The standard toggle hamburger menu opens on mobile devices.

3. **Hero Header & Search Form (`<header>`)**
   - **Technique:** Centered overlay card over a full-width background photo with dark linear-gradient contrast.
   - **Why:** This creates an immediate visual hook. Placing input fields (`destination-input`, `category-select`) inside a white elevated box gives users a clear starting point for searching.

4. **Main Exploration Section (`<main id="explore">`)**
   - **Technique:** Bootstrap 12-column grid (`col-lg-5` for the search results, `col-lg-7` for the map).
   - **Why:** On desktop screens, side-by-side positioning lets users see results and map side-by-side. On mobile/tablet screens, Bootstrap automatically stacks `col-lg-5` on top of `col-lg-7` for a clean mobile scroll layout.

5. **Map Placeholder (`<div id="map">`)**
   - **Technique:** Empty container with specific height CSS (`min-height: 450px`).
   - **Why:** Google Maps API requires an existing DOM `div` with explicit height dimensions to render markers into. Preparing this element now ensures zero markup changes are required when we add JavaScript in Step 2.

6. **Sponsored Packages Section (`<section id="packages">`)**
   - **Technique:** 3-column Bootstrap grid (`col-md-4`) with card components.
   - **Why:** Directly addresses the site owner's goal (monetization via package promotions) required in your assignment brief.

7. **Footer (`<footer>`)**
   - **Technique:** Dark contrast footer with semantic columns and contact information.
   - **Why:** Holds the London placeholder address (`124 Baker Street, Marylebone, London, NW1 6XE`) required for the assignment.

---

### B. CSS Techniques Block-by-Block

1. **Typography Separation (`font-family`)**
   - **Technique:** Applying `Montserrat` to `h1`-`h6` and `Open Sans` to body.
   - **Why:** Creating font contrast between headings and body text improves readability and visual hierarchy.

2. **Dark Gradient Overlay (`background: linear-gradient(...)`)**
   - **Technique:** Semi-transparent dark gradient overlaid on top of an Unsplash travel image background.
   - **Why:** Pure background images often make white text unreadable. Overlaying a semi-transparent dark gradient guarantees that white hero text is high contrast and legible.

3. **Scrollable Results Area (`max-height` + `overflow-y: auto`)**
   - **Technique:** Setting fixed height with vertical scrolling on `.results-container`.
   - **Why:** If a search returns 20 places, we do not want the entire web page to stretch endlessly down. Locking the results container height keeps the interactive map pinned next to the results.

4. **Micro-Interactions (`.card:hover`)**
   - **Technique:** `transform: translateY(-3px);` combined with CSS transitions.
   - **Why:** Subtle lift-on-hover animations give interactive feedback when users hover over package deals.

---

### My Development Approach

   - I practice the code on w3schools.com platform
   - Compile the code on Replit.com IDE
   - And copy the code to my IDE / Visual studio code
   - This is mainly to avoid too much messy work on my IDE
    
## 📁 Project File Structure
```text
destinationfinder/
│
├── index.html              # Core HTML structure & Bootstrap markup
├── README.md               # Project documentation & user stories
│
└── assets/
    └── css/
        └── style.css       # Custom CSS styling & overrides


```
### Wire Frame
```
** 1. Desktop Wireframe Layout (≥ 992px) **

+---------------------------------------------------------------------------------------------+
| [Icon] DestinationFinder          [Home]   [Explore]   [Packages]   [Contact]               |  <-- Sticky Navbar
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|                     Find Your Next Holiday Destination                                      |
|            Discover top attractions, accommodations, and dining across the globe.           |
|                                                                                             |
|      +-------------------------------------------------------------------------------+      |
|      | [📍] Enter a city (e.g. London, Paris)  | [All Categories v]  | [  Search  ]    |      | <-- Hero Search Bar
|      +-------------------------------------------------------------------------------+      |
|                                                                                             |
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|  LEFT COLUMN: Destinations (5 cols)           | RIGHT COLUMN: Destination Map (7 cols)      |
|  -------------------------------------------  | -----------------------------------------   |
|  [Destinations]           [Preview Mode]      |                                           |
|  [All]  [Sights]  [Stays]  [Food]             |   +-----------------------------------+   |
|                                               |   |                                   |   |
|  +-----------------------------------------+  |   |            Google Maps            |   |
|  | [Img] | The Sherlock Holmes Museum      |  |   |             Placeholder           |   |
|  |       | ★ 4.6 (3,420 rev) • 221b Baker St |  |   |        (Ready for API in Step 2)  |   |
|  |       | [View Deal]                     |  |   |                                   |   |
|  +-----------------------------------------+  |   |                                   |   |
|  (Scrollable container for future results)    |   +-----------------------------------+   |
|                                               |                                           |
+---------------------------------------------------------------------------------------------+
|                                                                                             |
|  Featured Holiday Packages                                                                  |
|  Curated deals from our travel partners                                                     |
|                                                                                             |
|  +---------------------------+  +---------------------------+  +-------------------------+  |
|  | [Sponsored]               |  | [Featured]                |  | [Popular]               |  |
|  | London City Weekend       |  | Paris Romantic Getaway    |  | Tokyo City Lights       |  |
|  | 3 Nights stay + pass      |  | 4 Nights + cruise         |  | 7 Nights + rail pass    |  |
|  | From £299 / person        |  | From £450 / person        |  | From £899 / person      |  |
|  | [ Book Package ]          |  | [ Book Package ]          |  | [ Book Package ]        |  |
|  +---------------------------+  +---------------------------+  +-------------------------+  |
|                                                                                             |
+---------------------------------------------------------------------------------------------+
|  DestinationFinder                                 Head Office Address:                     |
|  An interactive holiday planning platform          124 Baker Street, Marylebone             |
|  built with Bootstrap & Google Maps API.           London, NW1 6XE, United Kingdom          |
|---------------------------------------------------------------------------------------------|
|  © 2026 DestinationFinder. School Project Assignment.                                     |
+---------------------------------------------------------------------------------------------+


** 2. Tablet Wireframe Layout (768px – 991px) **

+-------------------------------------------------------+
| [Icon] DestinationFinder                       [≡]    |
+-------------------------------------------------------+
| Find Your Next Holiday Destination                    |
| [ Enter city...            ] [ All Cat ] [ Search ]   |
+-------------------------------------------------------+
| Destinations (Scrollable List)                        |
| +---------------------------------------------------+ |
| | [Img] The Sherlock Holmes Museum                  | |
| |       ★ 4.6 • 221b Baker St | [View Deal]         | |
| +---------------------------------------------------+ |
+-------------------------------------------------------+
| Destination Map Container                             |
| +---------------------------------------------------+ |
| |                                                   | |
| |              Interactive Map Placeholder          | |
| |                                                   | |
| +---------------------------------------------------+ |
+-------------------------------------------------------+
| Featured Holiday Packages (2 columns stacked)         |
| +-------------------------+ +-------------------------+ |
| | London City Weekend     | | Paris Getaway           | |
| | From £299 / person      | | From £450 / person      | |
| +-------------------------+ +-------------------------+ |
+-------------------------------------------------------+
| Footer: 124 Baker Street, London, NW1 6XE             |
+-------------------------------------------------------+


** 3. Mobile Wireframe Layout (< 768px) **

+---------------------------+
| [Icon] DestinationFinder  |
+---------------------------+
| Find Your Next Holiday    |
| Destination               |
|                           |
| [ Enter city...         ] |
| [ All Categories v      ] |
| [ Search Button         ] |
+---------------------------+
| Destinations              |
| [All][Sights][Stays][Food]|
|                           |
| +-----------------------+ |
| | [Img] Sherlock Holmes | |
| |       Museum          | |
| |       ★ 4.6           | |
| |       [View Deal]     | |
| +-----------------------+ |
+---------------------------+
| Destination Map           |
| +-----------------------+ |
| |                       | |
| |   Map Container       | |
| |                       | |
| +-----------------------+ |
+---------------------------+
| Featured Packages         |
| +-----------------------+ |
| | London City Weekend   | |
| | From £299 / person    | |
| | [ Book Package ]      | |
| +-----------------------+ |
| +-----------------------+ |
| | Paris Getaway         | |
| | From £450 / person    | |
| | [ Book Package ]      | |
| +-----------------------+ |
+---------------------------+
| Head Office:              |
| 124 Baker Street          |
| London, NW1 6XE           |
| © 2026 DestinationFinder  |
+---------------------------+
