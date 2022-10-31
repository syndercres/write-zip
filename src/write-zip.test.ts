import shortest from "./write-zip";

test("returns shortest array length", () => {
  expect(shortest([1, 2, 3, 6, 4, 6], ["hello", "boom", "fire", "string"])).toBe(4);
});
