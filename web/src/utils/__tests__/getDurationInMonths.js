import { getDurationInMonths } from "../getDurationInMonths";

describe("getDurationInMonths", () => {
  it("throws error when provided parameter is not a number", () => {
    const result = () => getDurationInMonths("notNumber");

    expect(result).toThrowError();
    expect(result).toThrowError("Days should be number");

    expect(() => getDurationInMonths(24)).not.toThrowError();
    expect(() => getDurationInMonths("24")).not.toThrowError();
  });

  it.each`
    daysNumber | expectedMonths
    ${40}      | ${1}
    ${45}      | ${2}
    ${44}      | ${1}
    ${57}      | ${2}
    ${76}      | ${3}
  `(
    "calculates number of months from days in approximately - for $daysNumber",
    ({ daysNumber, expectedMonths }) => {
      const result = getDurationInMonths(daysNumber);
      expect(result.value).toBe(expectedMonths);
      expect(result.type).toBe("months");
    }
  );
});
