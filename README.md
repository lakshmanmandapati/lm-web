# LM Website

A modern, glassmorphic portfolio website featuring an isometric hexagonal logo design.

## Features

- 🎨 Glassmorphic UI design with blur effects
- 🔷 Isometric hexagonal LM logo
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth animations with Framer Motion
- 🎯 Modern React with TypeScript

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- Framer Motion
- SASS/SCSS
- React Scripts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Docker Deployment

### Build Docker Image

```bash
docker build -t lm-website .
```

### Run with Docker

```bash
docker run -p 3000:80 lm-website
```

### Run with Docker Compose

```bash
docker-compose up -d
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository: `lakshmanmandapati/lm-web`
3. Vercel will auto-detect the React app settings
4. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Connect GitHub Repository

1. Sign in to Vercel
2. Click "New Project"
3. Import `lakshmanmandapati/lm-web`
4. Vercel will automatically deploy on every push to main branch

## Project Structure

```
├── public/          # Static files
├── src/
│   ├── assets/     # Images and styles
│   ├── components/ # React components
│   └── App.tsx     # Main app component
├── Dockerfile      # Docker configuration
├── docker-compose.yml
├── vercel.json     # Vercel configuration
└── package.json
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## License

MIT
