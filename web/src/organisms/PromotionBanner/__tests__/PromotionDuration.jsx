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

const datesForWeeks = {
    dateStart: new Date("2022-08-01T12:00:00"),
    dateEnd: new Date("2022-08-30T12:00:00")
};

const datesForMonths = {
    dateStart: new Date("2022-08-01T12:00:00"),
    dateEnd: new Date("2022-11-01T12:00:00")
};

const datesForHours= {
    dateStart: new Date("2022-08-01T12:00:00"),
    dateEnd: new Date("2022-08-17T18:30:00")
};

const datesForFewHours = {
    dateStart: new Date("2022-08-01T12:00:00"), 
    dateEnd: new Date("2022-08-17T05:00:00")
};

const datesForExpiredPromo = {
    dateStart: new Date("2021-05-01T12:00:00"),
    dateEnd: new Date("2021-07-01T12:00:00")
};

const datesForDays = {
    dateStart: new Date("2022-08-01T12:00:00"),
    dateEnd: new Date("2022-08-20T12:00:00")
};

describe("<PromotionDuration />", ()=> {
    beforeEach(()=> {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2022-08-17T01:40:18"));
    });

    it.each`
        dates | timeMeasure | expectedNumeralVal
        ${datesForDays} | ${"days"} | ${3}
        ${datesForWeeks} | ${"weeks"} | ${2}
        ${datesForMonths} | ${"months"} | ${3}
        ${datesForHours} | ${"hours"} | ${16}
        ${datesForFewHours} | ${"3:19:42"} | ${null}
        ${datesForExpiredPromo} | ${"promotion already finished"} | ${null} 
    `("checks if the right promotion duration is displayed when it starts $dateStart and ends $dateEnd",
    ({ dates, timeMeasure, expectedNumeralVal })=> {
        const customizedPromotionMock = { ...promotionMock, ...dates };
        
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