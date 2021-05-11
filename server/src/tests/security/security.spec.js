const request = require("supertest");
const app = require("../../index");
const { compare, encrypt } = require("../../security/securityUtils");
describe("Seciurity test", () => {
  it("Post login text", async () => {
    const res = await request(app).post("/login").send({
      username: "Norbert",
      password: process.env.MASTERPASSWORD,
    });
    expect(!!res.header.auth).toBe(true);
    expect(res.status).toBe(200);
  });

  it("Encode password and compare", () => {
    encrypt("testData")  
    expect(compare("testUser", "testData")).toBe(true);
    encrypt("testData2");
    expect(compare("testUser", "testData")).toBe(false);
  })
});
