const request = require("supertest");
const app = require("../src/app");

describe("Test GET /launches ", () => {
  test("API Should Respond with 200 Success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/);
    expect(response.status).toBe(200);
  });
});

describe("Test POST /launches", () => {
  test("It should response with 201 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "ABC",
        rocket: "ABC-DEF",
        target: "Epler",
        launchDate: "JAnuary 4, 2028",
      })
      .expect("Content-Type", /json/);
    expect(response.status).toBe(201);
  });
});
