import { faker } from "@faker-js/faker";
import prisma from "../../src/databases/postgres";
import { TProfessionalData } from "../../src/types/professionalTypes";

export async function createProfessionalsFac(
  ddd: number,
  cityId: number,
  serviceId: number
) {
  const professionals: TProfessionalData[] = [];
  const n = faker.datatype.number({ min: 5, max: 12 });
  for (let i = 0; i < n; i++) {
    const professional: TProfessionalData = {
      name: faker.name.fullName(),
      phone: parseInt(faker.phone.number(`${ddd}9########`)),
      address: faker.address.streetAddress(),
      profilePic: faker.image.avatar(),
      cityId,
      serviceId,
    };

    if (
      professionals.filter((element) => element.phone === professional.phone)
        .length === 0
    ) {
      professionals.push(professional);
    }
  }
  return await prisma.professionals.createMany({ data: professionals });
}
