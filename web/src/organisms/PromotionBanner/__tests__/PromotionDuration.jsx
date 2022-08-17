import React from "react";
const { render, screen } = require("@testing-library/react");
import { PromotionDuration } from "../PromotionDuration";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18nForTests";

const promotionMock = {
    id: "1",
    name: "test promotion",
    discount: {
        code: "AUG_22",
        percentage: 50
    }
};

const datesForWeeks = [new Date("2022-08-01T12:00:00"), new Date("2022-08-30T12:00:00")];

const datesForMonths = [new Date("2022-08-01T12:00:00"), new Date("2022-11-01T12:00:00")];

const datesForHours= [new Date("2022-08-01T12:00:00"), new Date("2022-08-17T18:30:00")];

const datesForFewHours = [new Date("2022-08-01T12:00:00"), new Date("2022-08-17T05:00:00")];

const datesForExpiredPromo = [new Date("2021-05-01T12:00:00"), new Date("2021-07-01T12:00:00")];

const datesForDays = [new Date("2022-08-01T12:00:00"), new Date("2022-08-20T12:00:00")];

describe("<PromotionDuration />", ()=> {
    beforeEach(()=> {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2022-08-17T01:40:18"));
    });

    it.each`
        dateStart | dateEnd | timeMeasure | expectedNumeralVal
        ${datesForDays[0]} | ${datesForDays[1]} | ${"days"} | ${3}
        ${datesForWeeks[0]} | ${datesForWeeks[1]} | ${"weeks"} | ${2}
        ${datesForMonths[0]} | ${datesForMonths[1]} | ${"months"} | ${3}
        ${datesForHours[0]} | ${datesForHours[1]} | ${"hours"} | ${16}
        ${datesForFewHours[0]} | ${datesForFewHours[1]} | ${"3:19:42"} | ${null}
        ${datesForExpiredPromo[0]} | ${datesForExpiredPromo[1]} | ${"promotion already finished"} | ${null} 
    `("should nanana", ({dateStart, dateEnd, timeMeasure, expectedNumeralVal})=> {
        const customizedPromotionMock = { ...promotionMock, dateStart: dateStart, dateEnd: dateEnd};
        render(
            <I18nextProvider i18n={i18n}>
                <PromotionDuration promotion={customizedPromotionMock}/>
            </I18nextProvider>
        );
        let displayedText;

        if(expectedNumeralVal !== null) {
            const regexExp = new RegExp(`the promotion runs for about ${expectedNumeralVal} ${timeMeasure}`, "i");
            displayedText = screen.getByText(regexExp);
        } else displayedText = screen.getByText(new RegExp(`${timeMeasure}`, "i"));

        expect(displayedText).toBeInTheDocument();
    });
});