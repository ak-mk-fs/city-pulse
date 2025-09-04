# 🎟️ City Pulse

A **React + TypeScript** project built with **Vite** that integrates with the **Ticketmaster Discovery API** to list events, show details, manage favourites, and handle mock authentication.  
This project is a demo with some simplified assumptions to speed up development.

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd city-pulse
```

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Install Web App Dependencies
Open a new terminal and navigate into the web app:
```bash
cd apps/web
npm install
```

### 4. Environment Variables
Create a `.env` file inside `apps/web` with:

```env
VITE_TICKETMASTER_API_KEY=your_ticketmaster_api_key_here
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

⚡ Notes:  
- All Vite environment variables **must be prefixed with `VITE_`** to be exposed to the app.  
- Do not use `REACT_APP_` — that’s for CRA.  

### 5. Run the App (Dev Mode)
```bash
npm run dev
```

The app will be available at:  
👉 `http://localhost:5173`

### 6. Build for Production
```bash
npm run build
```

### 7. Preview Production Build
```bash
npm run preview
```

---

## 📦 Project Structure
```
city-pulse/
  apps/
    web/
      src/
        components/     # UI components (EventCard, EventDetailCard, EventMap, etc.)
        pages/          # Screens (Events, Event Details, Favourites, Profile, Login/Register)
        hooks/          # Custom hooks (useFavourites, usePagination, useApi, etc.)
        services/       # API functions (Ticketmaster, Auth, etc.)
        types/          # TypeScript types
      .env              # Local environment variables
      vite.config.ts
      package.json
  common/               # Shared APIs and logic across apps
  package.json          # Root dependencies
```

---

## ✅ Features
- 🔐 **Login & Registration** with mock data (localStorage-based)
- 👤 **Profile Screen** with logout
- 📅 **Events List** from Ticketmaster Discovery API
- ⭐ **Favourites** stored in localStorage
- 🗺️ **Event Details** with Google Maps & Seat Map support
- 🌍 **Multi-language support** with JSON-based i18n
- ↔️ **RTL Layout Support**
- ♻️ **Reusable components** (EventCard, EventDetailCard, etc.)

---

## ⚠️ Assumptions & Notes
- Authentication is **mocked**. `token` and `userEmail` are stored in `localStorage`.
- Favourites and events are stored in **localStorage**, not persisted to a backend.
- **City filter is single-select** (not multi-select yet).
- Used a mix of **`className` styles and inline styles** to speed up development.
- **No component library** (e.g., Ant Design, Material UI) or CSS framework (e.g., Tailwind, Bootstrap) has been used.
- Logout clears: `token`, `userEmail`, `favourites`, `events_data`.
- UI styling is minimal and focused on functionality.

---

## 🛠️ Future Improvements
- Support **multi-select city filter**
- Replace localStorage with a real **backend + database**
- Implement proper **JWT-based authentication**
- Add a **design system / UI library**
- Improve layout with a CSS framework (e.g., Tailwind, SCSS modules)
- Add unit tests with **Jest + React Testing Library**

---

## 📜 License
MIT License
