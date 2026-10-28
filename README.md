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

---

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

** DESKTOP **
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

** TABLET **
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

** MOBILE **
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
```
