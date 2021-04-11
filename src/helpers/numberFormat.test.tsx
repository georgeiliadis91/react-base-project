import { formatTwoDecimals, leadingZeros } from "./numberFormat";

describe("Helper funcs", () => {
  //Test add func
  it.each([
    [19, "19.00"],
    [1, "1.00"],
    [232, "232.00"],
  ])("Format two decimals", (num, expected) => {
    expect(formatTwoDecimals(num)).toBe(expected);
  });

  //Test leading zeros func
  it.each([
    [[2, 1], "02"],
    [[4, 5], "000004"],
    [[9, 3], "0009"],
  ])("Leading zeros", (args, expected) => {
    expect(leadingZeros(args[0], args[1])).toBe(expected);
  });
});
