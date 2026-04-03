# ExecutiveHire — Job Portal

A full-stack job portal web app where users can browse, search, and filter job listings with data served from a live database.

🔗 [Live Demo](https://job-board-orpin-three.vercel.app)

## Features

- Browse job listings in a responsive 3-column grid
- Real-time search by title, company, and location
- Filter jobs by type — Full Time, Part Time, Contract, Hybrid
- Dynamic job detail pages with unique routes per listing
- "No jobs found" state for empty search results
- Data fetched from Supabase (PostgreSQL) via REST API

## Tech Stack

- React 18
- Vite
- Tailwind CSS v3
- React Router DOM
- Supabase (PostgreSQL database + REST API)
- Vercel (deployment)

## Key Technical Decisions

- Lifted search and filter state to `App.jsx` to share across components
- Replaced static data file with Supabase integration for real database fetching
- Used `useParams` for dynamic routing and fetched individual job records by ID
- Environment variables managed via `.env` to keep API keys out of version control

## Run Locally
```bash
git clone https://github.com/imneshat7/job-board.git
cd job-board
npm install
npm run dev
```

Add your own `.env` file:
```
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```
