import initializedRepository from "../repositories/initializedReporitory";

export default async function initializedService() {
  const data = await initializedRepository();
  return data;
}
