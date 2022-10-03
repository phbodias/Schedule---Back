import * as userRepository from "../repositories/userRepository";
import { TUserBody } from "../types/userTypes";
import { encryptPassword } from "../utils/encrypt";

export async function create(user: TUserBody) {
  const emailNotAvailable: boolean = !!(await findByEmail(user.email));
  if (emailNotAvailable)
    throw { code: "Conflict", message: "Email already in use" };

  user.password = await encryptPassword(user.password);
  return await userRepository.create(user);
}

export async function findByEmail(email: string) {
  return await userRepository.findByEmail(email);
}
