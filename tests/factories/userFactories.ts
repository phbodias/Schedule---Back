import { faker } from "@faker-js/faker";

export async function userFactory() {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    profilePic: faker.image.avatar(),
    password: faker.internet.password(),
  };
}
