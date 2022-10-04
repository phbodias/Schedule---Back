import { TProfilePic } from "../types/uploadTypes";
import * as picturesRepository from "../repositories/picturesRepository";
import { ProfilePics } from "@prisma/client";
import { deleteUploadS3 } from "../utils/deleteUploadS3";

export async function insert(data: TProfilePic) {
  const alreadyHave = await findProfPicByUserId(data.userId);
  if (alreadyHave) await deleteProfilePic(alreadyHave, data.userId);
  return await picturesRepository.insertProfPic(data);
}

export async function findProfPicByUserId(userId: number) {
  const pic: ProfilePics = await picturesRepository.findProfPicByUserId(userId);
  if (!pic) return null;
  return pic;
}

async function deleteProfilePic(pic: ProfilePics, userId: number) {
  if (pic.userId !== userId) throw { code: "Unauthorized", message: "" };
  await deleteUploadS3(pic);
  return await picturesRepository.deleteProfPic(pic.id);
}
