import prisma from "../databases/postgres";
import { TUserBody } from "../types/userTypes";

export default async function create(user: TUserBody) {
  return prisma.users.create({ data: user });
}
