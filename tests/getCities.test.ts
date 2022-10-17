import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/databases/postgres";

afterAll(async () => {
  await prisma.$disconnect();
});

describe("tests for route /cities", () => {
  it("get all cities, returns status 200 and a array", async () => {
    const cities = await prisma.cities.findMany();
    const result = await supertest(app).get("/cities");
    expect(result.status).toBe(200);
    expect(result.body.length === cities.length);
  });
});
