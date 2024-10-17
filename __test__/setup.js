const server = require("../index")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

afterAll(async () => {
 await prisma.users.deleteMany()
 await prisma.order.deleteMany()
 await prisma.access.deleteMany()
 await prisma.menus.deleteMany()
 await prisma.roles.deleteMany()
 await prisma.cars.deleteMany()

 server.close()
 console.log('end test')
})