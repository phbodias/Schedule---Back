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

describe("Testing POST /sign-in", () => {
  it("Login with a correct body and return status code 200 and a token", async () => {
    const body = await userFactory();
    await supertest(app).post("/sign-up").send(body);
    const user = { email: body.email, password: body.password };
    const result = await supertest(app).post("/sign-in").send(user);
    expect(result.status).toBe(200);
    expect(result.body.token.length).toBeGreaterThan(0);
  });

  it("Login with a incorrect password and return status code 401", async () => {
    const body = await userFactory();
    await supertest(app).post("/sign-up").send(body);
    const user = {
      email: body.email,
      password: body.password + "incorrect_pass",
    };
    const result = await supertest(app).post("/sign-in").send(user);
    expect(result.status).toBe(401);
  });

  it("Login with a email without register and return status code 404", async () => {
    const body = await userFactory();
    const user = { email: body.email, password: body.password };
    const result = await supertest(app).post("/sign-in").send(user);
    expect(result.status).toBe(404);
  });

  it("Login with a incorrect body and return status code 422", async () => {
    const body = await userFactory();
    await supertest(app).post("/sign-up").send(body);
    const user = {
      email: "invalid_email.com",
      password: body.password,
    };
    const result = await supertest(app).post("/sign-in").send(user);
    expect(result.status).toBe(422);
  });
});
