TravelTrucks

Frontend web application for TravelTrucks, a campervan rental company. Users can browse a catalog of campers, filter them by location, vehicle form, engine type, and transmission, and view detailed information about a selected camper along with a booking option.

Demo

🔗 Live project: https://travel-trucks-psi-nine.vercel.app/

Features
Home page with a hero banner and a link to the catalog.
Camper catalog:
filtering by location, vehicle form, engine type, and transmission (filtering handled on the backend via query parameters);
"Load More" pagination (loads 4 additional cards at a time, respecting active filters).
Camper details page (opens in a new tab):
image gallery built with Swiper;
user reviews with a five-star rating display;
booking form with field validation and data submission to the backend;
success notification after booking.
Loading indicators during asynchronous requests.
Tech Stack
Next.js (App Router)
TypeScript
TanStack Query — API requests and useInfiniteQuery for pagination
Formik + Yup — forms and validation
Zustand — global filters state
Swiper — image gallery
React Icons — icons
CSS Modules — styling
API

Camper data, filters, and reviews are fetched from the backend: https://campers-api.goit.study

Installation and Usage
Clone the repository:
bash
git clone https://github.com/SerhiiLikhnovskyi/TravelTrucks.git
cd TravelTrucks
Install dependencies:
bash
npm install
Run the project in development mode:
bash
npm run dev
Open http://localhost:3000 in your browser.
Page Structure
Route Description
/ Home page with hero banner
/catalog Camper catalog with filters and pagination
/catalog/[camperId] Camper details: gallery, reviews, booking form
