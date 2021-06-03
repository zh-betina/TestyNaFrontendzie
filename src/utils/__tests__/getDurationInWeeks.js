import { getDurationInWeeks } from "../getDurationInWeeks";

describe("getDurationInWeeks", () => {
  it("throws error for days greater than 30 and shorter than 10", () => {
    expect(() => {
      getDurationInWeeks(31);
    }).toThrow("Provided days should be shorter than 30");
    expect(() => {
      getDurationInWeeks(9);
    }).toThrow("Provided days should be greater than 10");
  });
  it("returns number of weeks without throws error", () => {
    const result = () => getDurationInWeeks(24);

    expect(result).not.toThrow();
    expect(result()).toEqual({ value: 3, type: "weeks" });
  });
});
