import React from "react";
import { useTranslation } from "react-i18next";
import ListHeader from "../atoms/ListHeader";
import AddressForm from "../organisms/AddressForm";
import Container from "../templates/Container";

const Address = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Container>
      <ListHeader>{t("Your address")}:</ListHeader>
      <AddressForm />
    </Container>
  );
};

export default Address;
