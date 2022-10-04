import * as userRepository from "../repositories/userRepository";
import { TUserBody, TSigninBody } from "../types/userTypes";
import { comparePasswords, encryptPassword } from "../utils/encrypt";
import { createToken } from "../middlewares/tokenMiddleware";

export async function create(user: TUserBody) {
  const emailNotAvailable: boolean = !!(await findByEmail(user.email));
  if (emailNotAvailable)
    throw { code: "Conflict", message: "Email already in use" };

  user.password = await encryptPassword(user.password);
  return await userRepository.create(user);
}

export async function checkCredentials(user: TSigninBody) {
  const { id, password: cryptPassword } = await findByEmail(user.email);
  if (!id) throw { code: "NotFound", message: "You haven't an account yet." };

  const matchPasswords: boolean = await comparePasswords(
    user.password,
    cryptPassword
  );
  if (!matchPasswords)
    throw { code: "Unauthorized", message: "Email or password incorrect!" };

  return await createToken(id);
}

async function findByEmail(email: string) {
  return await userRepository.findByEmail(email);
}

async function findById(id: number) {
  return await userRepository.findById(id);
}
