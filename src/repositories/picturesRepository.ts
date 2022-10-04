import { ProfilePics } from "@prisma/client";
import prisma from "../databases/postgres";
import { TProfilePic } from "../types/uploadTypes";

export async function insertProfPic(data: TProfilePic) {
  return await prisma.profilePics.create({ data });
}

export async function findProfPicByUserId(
  userId: number
): Promise<ProfilePics> {
  return await prisma.profilePics.findFirst({ where: { userId } });
}

export async function deleteProfPic(id: number) {
  return await prisma.profilePics.delete({ where: { id } });
}
