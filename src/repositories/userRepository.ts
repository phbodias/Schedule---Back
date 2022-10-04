import { Users } from "@prisma/client";
import prisma from "../databases/postgres";
import { TUserBody } from "../types/userTypes";

export async function create(user: TUserBody) {
  return prisma.users.create({ data: user });
}

export async function findById(id: number): Promise<Users> {
  const user: Users = await prisma.users.findFirst({ where: { id } });
  return user;
}

export async function findByEmail(email: string): Promise<Users> {
  const user: Users = await prisma.users.findFirst({ where: { email } });
  return user;
}
