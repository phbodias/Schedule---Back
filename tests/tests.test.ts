import supertest from "supertest";
import app from "../src/app";
import { userFactory } from "./factories/userFactories";
import prisma from "../src/databases/postgres";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "users" CASCADE;`;
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Testing POST /sign-up", () => {
  it("Insert a new user and return status code 201", async () => {
    const body = await userFactory();
    const result = await supertest(app).post("/sign-up").send(body);
    expect(result.status).toBe(201);
  });

  it("Tries to insert user with email already registered in the database and receives status 409", async () => {
    const body = await userFactory();
    await supertest(app).post("/sign-up").send(body);
    const result = await supertest(app).post("/sign-up").send(body);
    expect(result.status).toBe(409);
  });

  it("Tries to insert user without a valid email and receives status 422", async () => {
    const body = {
      email: "agoogle.com",
      password: "aaaaaaaaaaaaaa",
    };

    const result = await supertest(app).post("/sign-up").send(body);
    expect(result.status).toBe(422);
  });
});
