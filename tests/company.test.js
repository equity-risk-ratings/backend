const db = require("../data/dbConfig");
const Company = require("../models/company");

const testSeed = {
  company: "access bank",
  previous_closing_price: 2.33456,
  opening_price: 2.33456,
  high: 5.76,
  low: 1.56,
  close: 2.4,
  change: 0.005,
  trades: 2000,
  volume: 4500,
  value: 34567.76
};

describe("company models", () => {
  beforeEach(async () => {
    await db("companies").truncate();
  });
  afterEach(async () => {
    await db("companies").truncate();
  });

  it("should insert Company to the database", async () => {
    await db("companies").insert(testSeed);
    const company = await Company.find();
    expect(company).toHaveLength(1);
  });

  it("should return a given company from the database by it's ID", async () => {
    await db("companies").insert(testSeed);
    const result = await Company.findById(1);
    expect(result.company).toEqual("access bank");
    expect(result.id).toEqual(1);
  });

  it("should update a given company", async () => {
    await db("companies").insert(testSeed);
    const changes = {
      company: "first bank",
      previous_closing_price: 2.33456,
      opening_price: 2.33456,
      high: 5.76,
      low: 1.56,
      close: 2.4,
      change: 0.005,
      trades: 2000,
      volume: 4500,
      value: 34567.76
    };
    const updatedCompany = await Company.update(changes, 1);
    const result = await Company.findById(1);
    expect(result.company).toEqual("first bank");
  });

  it("should delete a company", async () => {
    let company = await db("companies").insert(testSeed);
    const deleteCompany = await db("companies").del(1);
    company = await Company.find();
    expect(company).toHaveLength(0);
  });
});
