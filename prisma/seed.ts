import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // const alice = await prisma.note.upsert({
  //   where: { email: 'alice@prisma.io' },
  //   update: {},
  //   create: {
  //     title: 'Test title',
  //     created: new Date(),
  //     description: 'test content'
  //   },
  // })
  await prisma.note.create({
    data: {
      title: 'Test title 1',
      created: new Date(),
      content: 'test content 1',
    },
  });
  await prisma.note.create({
    data: {
      title: 'Test title 2',
      created: new Date(),
      content: 'test content 2',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })