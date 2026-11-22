# Hiran Thathsara Portfolio

A MERN portfolio application built with React, Vite, Express, Node.js, Framer Motion and MongoDB-ready API content.

## Local development

```powershell
npm install
npm --prefix client install
npm --prefix server install
npm run dev
```

The client runs on Vite and the Express API runs on port 5000 by default. Set `PORT` to change the API port.

## Production

```powershell
npm run build
npm start
```

The Express server serves the built React application and exposes `/api/portfolio` and `/api/health`.

## Deployment

The included `render.yaml` deploys the application as a free Render web service. Optional environment variables:

- `MONGODB_URI`: MongoDB connection string
- `CLIENT_URL`: allowed production client origin
