import { getPromotionDurationInText } from "../getPromotionDurationInText";

test("should returns duration in months for durations longer than 30 days", () => {
  const result = getPromotionDurationInText(
    new Date("2021-02-10"),
    new Date("2021-06-01")
  );

  expect(result).toEqual("about 4 months");
});

test("should returns duration in weeks for durations longer than 10 days and shorter than 30", () => {
  const result = getPromotionDurationInText(
    new Date("2021-02-01"),
    new Date("2021-02-21")
  );

  expect(result).toEqual("about 3 weeks");
});
