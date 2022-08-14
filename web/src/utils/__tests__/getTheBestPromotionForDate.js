import { getTheBestPromotionForDate } from "../getTheBestPromotionForDate";

const promotion = [
  {
    id: 1,
    name: "some promotion",
    dateStart: new Date("2023-10-01"),
    dateEnd: new Date("2023-10-15"),
  },
];

const promotions = [
  {
    dateStart: new Date("2022-07-05"),
    dateEnd: new Date("2022-09-01"),
    discount: {
      code: "SUPER_TESTOWANIE",
      percentage: 5,
    },
  },
  {
    dateStart: new Date("2022-08-10"),
    dateEnd: new Date("2022-08-25"),
    discount: {
      code: "TESTY",
      percentage: 10,
    },
  },
];

describe("getTheBestPromotionForDate", () => {
  it("should return null if no current promotions available for the given date", () => {
    const result = getTheBestPromotionForDate(new Date(), promotion);

    expect(result).toBeNull();
  });

  it("should return the best available promotion for the given date", () => {
    const result = getTheBestPromotionForDate(new Date(), promotions);

    expect(result).toEqual(
      expect.objectContaining({
        discount: {
          code: "TESTY",
          percentage: 10,
        },
      })
    );
  });

  it("should return null if no promotions at all available at the moment", ()=> {
    const result = getTheBestPromotionForDate(new Date(), []);
    
    expect(result).toBeNull();
  });
});
