# DestinationFinder - Project Documentation

## [View the live project here](https://jaibe-444.github.io/Destination-Finder/)
This is an interactive holiday planning and destination discovery web application built as an academic project. It is designed to be responsive and accessible across a range of devices, making it easy to navigate for travelers looking for attractions, accommodations, and dining experiences.

---

## User Experience (UX)
- User stories
  - First Time Visitor Goals
    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about global holiday destinations.
    2. As a First Time Visitor, I want to be able to navigate throughout the site easily to find content.
    3. As a First Time Visitor, I want to look at ratings and reviews to understand how trusted destinations are, and locate social media or contact info.
  - Returning Visitor Goals
    1. As a Returning Visitor, I want to find new curated holiday packages.
    2. As a Returning Visitor, I want to find the best way to get in contact with travel specialists.
    3. As a Returning Visitor, I want to access community and support links.
  - Frequent User Goals
    1. As a Frequent User, I want to check for newly added destination listings and special deals.
    2. As a Frequent User, I want to use the live search and filtering tools to narrow down specific categories (Sights, Stays, Food).
    3. As a Frequent User, I want to interact with modal pop-ups to review full destination details and pricing.

---

## Design
- Colour Scheme
  - The primary colour palette utilizes Bootstrap dark tones paired with vibrant warning yellows and clean whites for high contrast and readability.
- Typography
  - **Montserrat** is used for clean, modern headings, while **Open Sans** serves as the readable body font.
- Imagery
  - High-resolution photography from Unsplash is integrated into hero headers, destination cards, and modal pop-ups to provide an inspiring travel aesthetic.

---

## Features
- Fully responsive layout across mobile, tablet, and desktop devices
- Interactive search bar and category filtering (All, Sights, Stays, Food)
- Google Maps JavaScript API integration with dynamic auto-fitting `LatLngBounds` markers
- Dynamic Bootstrap modals displaying detailed destination info, reviews, and booking prompts
- Featured holiday packages with interactive booking confirmation alerts

---

## Technologies Used
Languages Used
- HTML5
- CSS3
- JavaScript (ES6)

Frameworks, Libraries & Programs Used
- **Bootstrap 5.3.3**: Used to build a responsive grid system, navigation bars, cards, and modal components.
- **Bootstrap Icons**: Utilized for UI iconography across destination cards, headers, and buttons.
- **Google Fonts**: Imported Montserrat and Open Sans fonts for typography.
- **Google Maps JavaScript API**: Used to render interactive maps, custom markers, and info windows.
- **Git**: Used for version control, committing, and pushing code changes.
- **GitHub & GitHub Pages**: Used to store the repository code and deploy the live web application.

---

## Testing & Quality Assurance
The application underwent thorough testing across multiple dimensions:

- **Performance & Accessibility Testing:** Audited using **[Google Lighthouse / PageSpeed Insights](https://pagespeed.web.dev/)** to evaluate performance, best practices, SEO, and accessibility metrics.
- **Code Validation:** Verified semantic correctness using the **[W3C Nu HTML Checker](https://validator.w3.org/)** and checked styling integrity using the **[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)**.
- **Cross-Browser Compatibility:** Tested and verified layout consistency and interactive features across **Google Chrome, Mozilla Firefox, Microsoft Edge, and Opera**.

---

## Troubleshooting & Errors Fixed
During development, several key technical and validation challenges were successfully resolved:
1.  **Google Maps API Integration:** Resolved initial `InvalidKeyMapError` and marker clipping issues by implementing asynchronous callback loading and wrapper `LatLngBounds` bounding-box logic.
2.  **W3C Heading Hierarchy Errors:** Corrected semantic heading level jumps (e.g., ensuring `h2` elements are correctly followed by `h3` rather than skipping straight to `h5`/`h6`).
3.  **HTML Structure Balance:** Cleaned up unclosed tags and container nesting within the main grid layout to achieve 100% W3C validation compliance.

---

## Development Resources & Acknowledgements
- **Learning & Reference:** 
    - [W3Schools](https://www.w3schools.com) – Core reference for HTML, CSS, and JavaScript DOM manipulation syntax.
    - [Replit](https://replit.com) – Utilized for collaborative code prototyping and testing.
    - [YouTube Tutorial Guide](https://youtu.be/NfvtQ2p5QG4) – Consulted for responsive layout design strategies and UI structuring.
- **Image Sources:** 
    - **[Unsplash](https://unsplash.com/)** – Provided all high-resolution photography used for destination cards, hero backgrounds, and modal views under their free-to-use license.

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
