import prisma from "../databases/postgres";
import { TProfilePic } from "../types/uploadTypes";

export async function insertProfPic(data: TProfilePic) {
  return await prisma.profilePics.create({ data });
}

