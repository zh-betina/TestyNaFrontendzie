import { getDurationInMonths } from "../getDurationInMonths";

describe("getDurationInMonths", () => {
  it("throws error when number of days in shorter than 30", () => {
    const result = () => getDurationInMonths(10);

    expect(result).toThrowError();
    expect(result).toThrowError("Days should be greater than 30");
  });

  it.each`
    daysNumber | expected
    ${42}      | ${1}
    ${40}      | ${1}
    ${45}      | ${2}
    ${57}      | ${2}
    ${76}      | ${3}
  `(
    "returns text with rounded number of months for days: $daysNumber",
    ({ daysNumber, expected }) => {
      const result = getDurationInMonths(daysNumber);
      expect(result.value).toBe(expected);
      expect(result.type).toBe("months");
    }
  );

  it("returns text with rounded number of months", () => {
    const resultFor42Days = getDurationInMonths(42);
    const resultFor55Days = getDurationInMonths(55);

    expect(resultFor42Days.value).toBe(1);
    expect(resultFor55Days.value).toBe(2);
  });
});
