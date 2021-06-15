import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import polandFlag from "../assets/images/pl-flag.svg";
import ukFlag from "../assets/images/uk-flag.svg";

export const LanguageChanger = (): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const langToSet = i18n.language === "pl" ? "en" : "pl";
    i18n.changeLanguage(langToSet);
  };

  const getFlagIcon = (lngTag: string) => {
    switch (lngTag) {
      case "pl":
        return polandFlag;
      case "en":
      default:
        return ukFlag;
    }
  };

  return (
    <Container onClick={changeLanguage}>
      <Image alt="languageChanger" src={getFlagIcon(i18n.language)} />
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;
