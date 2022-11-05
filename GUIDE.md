# Stack

1. [pnpm](https://pnpm.io/)
2. [Prisma](https://www.prisma.io/)
3. [trpc](https://trpc.io/)
4. [nextJS](https://nextjs.org/)
5. [TailwindCSS](https://tailwindcss.com/)
6. [Playwright](https://playwright.dev/)

# Workspace


# Setup

```bash
# download modules
pnpm install

# setup database
pnpm prisma generate
pnpm prisma migrate dev
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