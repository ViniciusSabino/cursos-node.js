const supertest = require("supertest");
const app = require("../src/app");

const request = supertest(app);

test("Deve responder na raiz", async () => {
  const res = await request.get("/");
  expect(res.status).toEqual(200);
});
