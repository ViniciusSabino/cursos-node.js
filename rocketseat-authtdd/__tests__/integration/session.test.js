const request = require("supertest");

const app = require("../../src/app");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Authentication", () => {
  //executado uma vez antes de cada teste
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Vinicius",
      email: "vnc.chelsea@gmail.com",
      password_hash: "1234"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "12345"
      });

    expect(response.status).toBe(200);
  });
});
