import initializedRepository from "../repositories/userRepository";

export default async function initializedService() {
  const data = await initializedRepository();
  return data;
}
