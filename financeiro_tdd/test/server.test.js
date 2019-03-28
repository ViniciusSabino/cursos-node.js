const supertest = require("supertest");

const request = supertest("http://localhost:3001");

test("Dever responder na porta 3001", async () => {
  // acessar a url http://localhost:3001
  // verificar que a resposta foi 200

  const res = await request.get("/");
  expect(res.status).toEqual(200);
});
