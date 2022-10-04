import { TProfilePic } from "../types/uploadTypes";
import * as uploadRepository from "../repositories/uploadRepository";

export async function insert(data: TProfilePic) {
  return await uploadRepository.insertProfPic(data);
}
