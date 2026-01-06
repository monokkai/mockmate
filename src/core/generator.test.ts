import { generate } from "./generator";
import { fetchData } from "./fetcher";

jest.mock("./fetcher");

const mockedFetchData = fetchData as jest.MockedFunction<typeof fetchData>;

test("generates limited amount of data", async () => {
  mockedFetchData.mockResolvedValue([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  const data = await generate({
    category: "users",
    quantity: 2,
  });

  expect(data.length).toBe(2);
  expect(data).toEqual([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});
