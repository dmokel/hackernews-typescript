import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  await prisma.$connect();
  const allLinks = await prisma.link.findMany();
  console.log("allLinks:", allLinks);

  const newLink = await prisma.link.create({
    data: {
      description: "Fullstack tutorial for GraphQL",
      url: "www.howtographql.com"
    }
  });
  console.log("newLink:", newLink);
}

main().then().catch(e => {
  throw e;
}).finally(async () => {
  await prisma.$disconnect()
})
