import request from "supertest";
import app from "@/pages/api/v1/fixtures";

// Define the describe block for the endpoint
describe("fixtures endpoint", () => {
  it("should return a 200 status code with fixtures data", async () => {
    // Make a GET request to the endpoint with query parameters
    const response = await request(app)
      .get("/api/v1/fixtures")
      .query({ date: "1", month: "1", year: "2022", page: "1", limit: "10" });

    // Assert that the response has a 200 status code
    expect(response.status).toEqual(200);

    // Assert that the response body contains the expected data
    expect(response.body.status).toEqual(200);
    expect(response.body.data.fixtures).toBeDefined();
    expect(response.body.data.totalCount).toBeDefined();
  });

  it("should return a 200 status code with an error message", async () => {
    // Make a GET request to the endpoint with invalid query parameters
    const response = await request(app).get("/api/v1/fixtures").query({
      date: "invalid",
      month: "invalid",
      year: "invalid",
      page: "invalid",
      limit: "invalid"
    });

    // Assert that the response has a 500 status code
    expect(response.status).toEqual(200);

    // Assert that the response body contains the expected error message
    expect(response.body.status).toEqual(200);
    expect(response.body.error).toBeDefined();
  });
});
