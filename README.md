# Game of Thrones Game

## Folder Structure
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── pages
│   │   ├── _app.tsx
│   ├── app // pages and layout
│   │   ├── api
│   │   ├── navigation
│   │   └── page.tsx
│   ├── common // common code used across application
│   │   ├── components
│   │   │   ├── ui
│   │   │   └── elements
│   │   ├── hooks
│   │   ├── mocks
│   │   ├── queries
│   │   ├── styles
│   │   ├── types
│   │   └── utils
│   ├── modules // features
│   │   ├── auth
│   │   │   ├── api
│   │   │   ├── components
    │   │   └── auth.js
│   │   └── utils
│   ├── assets // global static assets such as images, svgs, company logo, etc.
│   │   ├── images
    │   └── svgs
│   └── styles // global styles
│       ├── Home.module.css
│       └── globals.css
└── tsconfig.json
