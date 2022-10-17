import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/databases/postgres";

afterAll(async () => {
  await prisma.$disconnect();
});

describe("tests for route /services", () => {
  it("get all services, returns status 200 and a array", async () => {
    const services = await prisma.services.findMany();
    const result = await supertest(app).get("/services");
    expect(result.status).toBe(200);
    expect(result.body.length === services.length);
  });
});
