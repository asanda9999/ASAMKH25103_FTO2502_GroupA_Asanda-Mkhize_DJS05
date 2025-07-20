# Podcast Explorer App

A modern web application for discovering, searching, and exploring podcasts by genre, title, and more. Built with React and Vite, this app provides a fast, interactive experience for browsing a wide variety of podcasts, viewing detailed show information, and filtering by your interests.

## Features

- **Browse Podcasts:** View a grid of podcasts fetched from a public API, including cover images, titles, genres, season count, and last updated date.
- **Search:** Instantly search podcasts by title using the search bar.
- **Genre Filter:** Filter podcasts by genre to quickly find shows that match your interests.
- **Sort Options:** Sort podcasts by different criteria (e.g., date updated).
- **Pagination:** Navigate through large lists of podcasts with responsive pagination.
- **Podcast Details:** Click any podcast to view detailed information, including description, genres, seasons, and episodes.
- **Responsive Design:** Works well on desktop, tablet, and mobile devices.
- **Error Handling:** User-friendly error messages and loading indicators.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Open a terminal and navigate to this project directory:
   ```sh
   cd ASAMKH25103_FTO2502_GroupA_Asanda-Mkhize_DJS05/5
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App in Development
Start the development server with hot reloading:
```sh
npm run dev
```
- The app will be available at the local address shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

### Building for Production
To build the app for production:
```sh
npm run build
```
- The optimized output will be in the `dist` folder.

### Previewing the Production Build
To locally preview the production build:
```sh
npm run preview
```

### Linting
To check for code style and errors:
```sh
npm run lint
```

## Project Structure
- `src/` — Main source code
  - `components/` — UI components (PodcastCard, PodcastGrid, SearchBar, etc.)
  - `api/` — API utility for fetching podcasts
  - `context/` — React context for global state management
  - `utils/` — Utility functions
  - `data.js` — Static genre data
- `public/` — Static assets (if any)
- `index.html` — Main HTML file

## Routing: Linking Podcast Cards to Podcast Detail Pages

This app uses [React Router](https://reactrouter.com/) for client-side navigation between pages.

### How Routing Works

1. **Route Definitions**  
   In `src/App.jsx`, the app defines two main routes:
   - `/` — Shows the main podcast list and controls.
   - `/podcast/:id/:slug` — Shows the detail page for a specific podcast.

2. **Clickable Podcast Cards**  
   In `src/components/PodcastCard.jsx`, each podcast card is wrapped in a `<Link>` from `react-router-dom`:
   ```jsx
   <Link to={`/podcast/${podcast.id}/${slugify(podcast.title)}`} className={styles.cardLink}>
     <div className={styles.card}>
       {/* ...podcast info... */}
     </div>
   </Link>
   ```
   Clicking a card navigates to the detail route for that podcast.

3. **Detail Page Rendering**  
   The route `/podcast/:id/:slug` is handled in `App.jsx`:
   ```jsx
   <Route
     path="/podcast/:id/:slug"
     element={
       <Suspense fallback={<div>Loading show details...</div>}>
         <PodcastDetail />
       </Suspense>
     }
   />
   ```
   The `PodcastDetail` component uses `useParams()` from `react-router-dom` to extract the `id` from the URL and fetch the correct podcast details.

4. **Router Setup**  
   In `src/main.jsx`, the app is wrapped in `<BrowserRouter>`, enabling client-side routing throughout the app.

### Installing React Router

React Router is already listed as a dependency in `package.json`. If you need to install or update it manually, run:

```sh
npm install react-router-dom
```

This allows you to use components like `<BrowserRouter>`, `<Routes>`, `<Route>`, and `<Link>` for navigation.

## Data Source
- Podcasts and show details are fetched from the public API: [https://podcast-api.netlify.app/](https://podcast-api.netlify.app/)
- Genre data is included locally in `src/data.js`.

## License
This project is for educational purposes.

---

Feel free to customize or extend this app for your own podcast discovery needs!
