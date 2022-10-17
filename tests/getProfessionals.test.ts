import supertest from "supertest";
import app from "../src/app";
import prisma from "../src/databases/postgres";

afterAll(async () => {
  await prisma.$disconnect();
});

describe("tests for route /professionals", () => {
  it("get any professionals, returns status 200 and a array", async () => {
    const result = await supertest(app).get("/professionals");
    expect(result.status).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
  });

  it("get professionals from a certain city, returns status 200 and a array", async () => {
    const { id, city } = await prisma.cities.findFirst();
    const result = await supertest(app).get(`/professionals?city=${id}`);
    expect(result.status).toBe(200);
    expect(result.body.length).toBeGreaterThan(0);
    expect(result.body[0].City.city === city);
  });
});

describe("tests for route /professionals/:service", () => {
  it("get professionals for a certain service, returns status 200 and a array", async () => {
    const { id, service } = await prisma.services.findFirst();
    const result = await supertest(app).get(`/professionals/${id}`);
    expect(result.status).toBe(200);
    expect(result.body[0].Services.service === service);
  });
});

describe("tests for route /professional/:id", () => {
  it("get s professional for id, returns status 200 and a array", async () => {
    const { id, name } = await prisma.professionals.findFirst();
    const result = await supertest(app).get(`/professional/${id}`);
    expect(result.status).toBe(200);
    expect(result.body.name === name);
  });
});
