# Personal Portfolio Website

This is a personal portfolio website for Pradyum Chitlu.

## Overview
Full-stack setup:
- **Frontend:** Next.js (React) static site
- **Backend:** Node.js + Express API (for contact + data)

## Technologies Used
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Express, CORS

## Getting Started

### 1) Install dependencies

```bash
npm install
cd server && npm install
```

### 2) Run frontend + backend (dev)

```bash
npm run dev
```

Frontend runs on `http://localhost:3000`. Backend runs on `http://localhost:4000`.

### Environment variables

- Frontend: `NEXT_PUBLIC_API_BASE_URL` (default: `http://localhost:4000`)
- Backend:
  - `PORT` (default: `4000`)
  - `CORS_ORIGINS` (comma-separated, optional)
  - `CONTACT_WEBHOOK_URL` (optional; if unset, messages append to `.data/contact-messages.jsonl`)

### Backend API

- `GET /health`
- `GET /projects`
- `POST /contact` body: `{ "name": "...", "email": "...", "message": "..." }`

## Deployment notes

- The GitHub Pages workflow deploys the **frontend** only.
- Deploy the **backend** separately (Render/Fly/Railway/etc) and set `NEXT_PUBLIC_API_BASE_URL` + `CORS_ORIGINS` accordingly.
