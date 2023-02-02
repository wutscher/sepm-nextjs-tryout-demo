# Stack

1. [pnpm](https://pnpm.io/)
2. [Prisma](https://www.prisma.io/)
3. [trpc](https://trpc.io/)
4. [nextJS](https://nextjs.org/)
5. [TailwindCSS](https://tailwindcss.com/)
6. [Playwright](https://playwright.dev/)

# Workspace

# Recommended Plugins

# File Structure

```
<ROOT>
│
└─ app      <-- Frontend (Server / Client Components)
│
└─ public   <-- static resources (images, robots.txt, etc.)
│
└─ src      <-- Non-Frontent Route code
   │
   └─ components  <-- Reused components
   │
   └─ pages       <-- mostly replaced by /app except for api
   |  │
   |  └─ api      <-- Rest Routes
   │
   └─ prisma      <-- Database
   │
   └─ styles      <-- Stylesheets
   │
   └─ utils       <-- Utility functions (Database Singleton, getX, getY, etc.)
```


# View data

```bash
pnpm prisma studio
```

# Seed
```bash
pnpm prisma db seed
```

# Data model change

```bash
pnpm prisma migrate --name=changeXX
```

# Test
```bash
pnpm test
```

# Run
```bash
pnpm dev
```