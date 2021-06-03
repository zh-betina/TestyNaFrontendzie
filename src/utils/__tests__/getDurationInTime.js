import { getDurationInTime } from "../getDurationInTime";

describe("getDurationInTime", () => {
  test("should return time object for timestamp", () => {
    const startDate = new Date("2020-02-11 10:00");
    const endDate = new Date("2020-02-11 10:30");

    const result = getDurationInTime(startDate, endDate);
    expect(result.value).toEqual({ hours: 0, minutes: 30, seconds: 0 });
    expect(result.type).toEqual("time");
  });

  it("should return time between two dates with hours, minutes and seconds", () => {
    const startDate = new Date("2020-02-11 10:00:00");
    const endDate = new Date("2020-02-11 13:30:21");

    const result = getDurationInTime(startDate, endDate);
    expect(result.value).toMatchSnapshot();
    expect(result.type).toEqual("time");
  });
});
