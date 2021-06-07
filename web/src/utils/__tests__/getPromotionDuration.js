import { getPromotionDuration } from "../getPromotionDuration";

describe("getPromotionDuration", () => {
  it("should return duration in months for duration longer than 30 days", () => {
    const result = getPromotionDuration(
      new Date("2021-02-10"),
      new Date("2021-06-01")
    );

    expect(result.value).toEqual(4);
    expect(result.type).toEqual("months");
  });
});
