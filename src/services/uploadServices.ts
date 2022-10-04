import { TProfilePic } from "../types/uploadTypes";
import * as uploadRepository from "../repositories/uploadRepository";
import { ProfilePics } from "@prisma/client";

export async function insert(data: TProfilePic) {
  return await uploadRepository.insertProfPic(data);
}

export async function findProfPicByUserId(userId: number) {
  const pic: ProfilePics = await uploadRepository.findProfPicByUserId(userId);
  if (!pic) return null;
  return pic.url;
}
