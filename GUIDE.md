# Stack

1. [pnpm](https://pnpm.io/)
2. [Prisma](https://www.prisma.io/)
3. [trpc](https://trpc.io/)
4. [nextJS](https://nextjs.org/)


# Setup

```bash
# download modules
pnpm install

# setup database
pnpm run prisma generate
```


# View data

```bash
pnpm run prisma studio
```

# Seed
```bash
pnpm run prisma db seed
```

# Data model change

```bash
pnpm run prisma migrate --name=changeXX
```