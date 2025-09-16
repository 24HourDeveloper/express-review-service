import { prisma } from "../prisma";
import { v4 as uuidv4 } from "uuid";

export async function createAnonymousUser() {
  return prisma.user.create({
    data: { id: uuidv4() },
  });
}

export async function findUserById(userId: string) {
  return prisma.user.findUnique({ where: { id: userId } });
}
