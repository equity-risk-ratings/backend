const db = require("../data/dbConfig");
const Users = require("../models/user");

const testSeed = {
  firstName: "Tayo",
  lastName: "Ayeni",
  password: "123456",
  email: "shola@yahoo.com",
  role: "admin"
};

describe("user models", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  afterEach(async () => {
    await db("users").truncate();
  });

  it("should insert users to the database", async () => {
    await db("users").insert({
      firstName: "Shola",
      lastName: "Ayeni",
      password: "123456",
      email: "ayeni@yahoo.com",
      role: "admin"
    });
    await db("users").insert({
      firstName: "Dare",
      lastName: "Ayeni",
      password: "123456",
      email: "dare@yahoo.com",
      role: "admin"
    });
    await db("users").insert(testSeed);
    const users = await Users.find();
    expect(users).toHaveLength(3);
  });

  it("should return a given user from the database by it's ID", async () => {
    await db("users").insert(testSeed);
    const result = await Users.findById(1);
    expect(result.firstName).toEqual("Tayo");
    expect(result.id).toEqual(1);
  });

  it("should update a given user", async () => {
    await db("users").insert(testSeed);
    const changes = {
      firstName: "Shola",
      lastName: "Ayeni",
      password: "123456",
      email: "shola@yahoo.com",
      role: "admin"
    };
    const updatedUser = await Users.update(changes, 1);
    const result = await Users.findById(1);
    expect(result.firstName).toEqual("Shola");
  });

  it("should delete a user", async () => {
    let user = await db("users").insert(testSeed);
    const deleteUser = await db("users").del(1)
    user = await Users.find()
    expect(user).toHaveLength(0)

  });
});
