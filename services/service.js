import request from "graphql-request";

const endpoint = "http://localhost:8081/query";

export async function fetchData(query) {
  try {
    const data = await request(endpoint, query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
