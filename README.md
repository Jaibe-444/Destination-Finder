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

- **Performance & Accessibility Testing:** Audited using [Google Lighthouse / PageSpeed Insights](https://pagespeed.web.dev/) to evaluate performance, best practices, SEO, and accessibility metrics.
- **Code Validation:** Verified semantic correctness using the [W3C Nu HTML Checker](https://validator.w3.org/) and checked styling integrity using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- **Cross-Browser Compatibility:** Tested and verified layout consistency and interactive features across **Google Chrome, Mozilla Firefox, Microsoft Edge, and Opera**.

---
## Bugs
- **Note on External Links:** GitHub markdown automatically opens standard markdown links `[Text](URL)` in new tabs depending on user settings, which is why raw `target="_blank"` tags can occasionally be stripped out by the parser.
  
## Troubleshooting & Errors Fixed
During development, several key technical and validation challenges were successfully resolved:
1. **Google Maps API Integration:** Resolved initial `InvalidKeyMapError` and marker clipping issues by implementing asynchronous callback loading and wrapper `LatLngBounds` bounding-box logic.
2. **W3C Heading Hierarchy Errors:** Corrected semantic heading level jumps (e.g., ensuring `h2` elements are correctly followed by `h3` rather than skipping straight to `h5`/`h6`).
3. **HTML Structure Balance:** Cleaned up unclosed tags and container nesting within the main grid layout to achieve 100% W3C validation compliance.

---

## Development Resources & Acknowledgements
- **Learning & Reference:** 
    - [W3Schools](https://www.w3schools.com/) – Core reference for HTML, CSS, and JavaScript DOM manipulation syntax.
    - [Replit](https://replit.com/) – Utilized for collaborative code prototyping and testing.
    - [YouTube Tutorial Guide](https://youtu.be/NfvtQ2p5QG4) – Consulted for responsive layout design strategies and UI structuring.
- **Image Sources:** 
    - **[Unsplash](https://unsplash.com)** – Provided all high-resolution photography used for destination cards, hero backgrounds, and modal views under their free-to-use license.

---

### My Development Approach
- I practice the code on w3schools.com platform
- Compile the code on Replit.com IDE
- And copy the code to my IDE / Visual studio code
- This is mainly to avoid too much messy work on my IDE
- **I left the commented out code on main.js. This to make it easier for me to edit**

---
      
## 📁 Project File Structure

```text
Destination-Finder/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    │   └── favicon.png
    └── js/
        └── main.js

## Project Screenshots & Validation

### 1. Application Interface
![Application Interface](assets/images/codescreenshot-1.png)

### 2. W3C Nu HTML Checker Results
![Nu HTML Checker](assets/images/nu-html-validator.png)

### 3. W3C CSS Validator Results
![CSS Validator](assets/images/css-validator.png)
