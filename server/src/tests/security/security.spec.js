const request = require("supertest");
const app = require("../../index");
describe("Seciurity test", () => {
  it("Post login text", async () => {
    const res = await request(app).post("/login").send({
      username: "Norbert",
      password: process.env.MASTERPASSWORD,
    });
    expect(!!res.header.auth).toBe(true);
    expect(res.status).toBe(200);
  });
});
