import { getDurationInMonths } from "../getDurationInMonths";

describe("getDurationInMonths", () => {
  it("throws error when number of days in shorter than 30", () => {
    const result = () => getDurationInMonths(10);

    expect(result).toThrowError();
    expect(result).toThrowError("Days should be greater than 30");
  });

  it.each`
    daysNumber | expected
    ${42}      | ${"about 1 months"}
    ${40}      | ${"about 1 months"}
    ${45}      | ${"about 2 months"}
    ${57}      | ${"about 2 months"}
    ${76}      | ${"about 3 months"}
  `(
    "returns text with rounded number of months for days: $daysNumber",
    ({ daysNumber, expected }) => {
      const result = getDurationInMonths(daysNumber);
      expect(result).toBe(expected);
    }
  );

  it("returns text with rounded number of months", () => {
    const resultFor42Days = getDurationInMonths(42);
    const resultFor55Days = getDurationInMonths(55);

    expect(resultFor42Days).toBe("about 1 months");
    expect(resultFor55Days).toBe("about 2 months");
  });
});
