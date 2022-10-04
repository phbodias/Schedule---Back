import { TProfilePic } from "../types/uploadTypes";
import * as uploadRepository from "../repositories/uploadRepository";
import { ProfilePics } from "@prisma/client";
import { deleteUploadS3 } from "../utils/deleteUploadS3";

export async function insert(data: TProfilePic) {
  const alreadyHave = await findProfPicByUserId(data.userId);
  if (alreadyHave) await deleteProfilePic(alreadyHave, data.userId);
  return await uploadRepository.insertProfPic(data);
}

export async function findProfPicByUserId(userId: number) {
  const pic: ProfilePics = await uploadRepository.findProfPicByUserId(userId);
  if (!pic) return null;
  return pic;
}

async function deleteProfilePic(pic: ProfilePics, userId: number) {
  if (pic.userId !== userId) throw { code: "Unauthorized", message: "" };
  await deleteUploadS3(pic);
  return await uploadRepository.deleteProfPic(pic.id);
}
