const bcrypt = require("bcryptjs");
const app = require("../index");
const request = require("supertest");
const db = require("../data/dbConfig");

describe("user routes", () => {
  let token;
  beforeAll(async () => {
    testUser = {
      firstName: "Tayo",
      lastName: "Ayeni",
      password: bcrypt.hashSync("123456", 10),
      email: "shola@yahoo.com",
      role: "admin"
    };
    await request(app)
      .post("/api/v1/user/signup")
      .send(testUser);
    const res = await request(app)
      .post("/api/v1/user/login")
      .send({ email: "shola@yahoo.com", password: "123456" });
    token = JSON.parse(res.text).token;
  });
  afterAll(async () => {
    db.destroy();
  });
  describe("POST, /api/v1/user/signup", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should return status code 201 Created when request is successful", async () => {
      const user = testUser;
      const response = await request(app)
        .post("/api/v1/user/signup")
        .send(user);

      expect(response.status).toBe(201);
    });
  });
});
