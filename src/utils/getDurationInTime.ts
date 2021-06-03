import {
  PromotionDurationOutput,
  PromotionDurationType,
} from "../types/PromotionDurationType";

export const getDurationInTime = (
  startDate: Date,
  endDate: Date
): PromotionDurationOutput => {
  let timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  let hh: string | number = Math.floor(timeDiff / 1000 / 60 / 60);
  hh = `0${hh}`.slice(-2);

  timeDiff -= +hh * 1000 * 60 * 60;
  let mm: string | number = Math.floor(timeDiff / 1000 / 60);
  mm = `0${mm}`.slice(-2);

  timeDiff -= +mm * 1000 * 60;
  let ss: string | number = Math.floor(timeDiff / 1000);
  ss = `0${ss}`.slice(-2);

  return {
    type: PromotionDurationType.time,
    value: {
      hours: +hh,
      minutes: +mm,
      seconds: +ss,
    },
  };
};
