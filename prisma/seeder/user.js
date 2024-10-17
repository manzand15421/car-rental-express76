const { PrismaClient } = require("@prisma/client");
const { encryptPassword } = require("../../src/helpers/bcrypt");

const prisma = new PrismaClient();
async function userSeed() {

  return await prisma.users.upsert({ //upsert = update insert
    where: { email: "superadmin@mail.com" },
    update: {},
    create: {
      email: "superadmin@mail.com",
      fullname: "Super Duper Admin",
      password: await encryptPassword("slamet54118"),
      role_id: 1,
    },
  });
}

module.exports = userSeed;
