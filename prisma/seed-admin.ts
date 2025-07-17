import { hash } from "bcryptjs";
import prisma from "@/lib/prisma";

async function createUser() {
  const hashed = await hash("@_utsav99", 10);
  await prisma.user.create({
    data: {
      email: "utsavsoni619@gmail.com",
      password: hashed,
      name: "Utsav Soni",
      // role: "ADMIN", // Optional if role is defined in schema
    },
  });
  
  console.log("✅ Admin user created");
}

createUser()
  .catch((err) => {
    console.error("❌ Error creating admin:", err);
  })
  .finally(() => {
    process.exit();
  });
