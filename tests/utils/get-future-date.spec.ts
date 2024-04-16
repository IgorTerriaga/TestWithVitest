import { expect, it } from "vitest";
import { getfutureDate } from "./get-future-date";

it("increases date with one year", () => {
  const year = new Date().getFullYear();
  console.log(year)
  expect(getfutureDate(`${year}-08-10`).getFullYear()).toEqual(2025);
});
