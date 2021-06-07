import { getDurationInTime } from "../getDurationInTime";

describe("getDurationInTime", () => {
  it("should calculate difference between two dates and return it as a time record", () => {
    const startDate = new Date("2020-01-20 10:30");
    const endDate = new Date("2020-01-21 3:00");

    const result = getDurationInTime(startDate, endDate);
    expect(result).toEqual({
      type: "time",
      value: {
        hours: 16,
        minutes: 30,
        seconds: 0,
      },
    });
  });
});
