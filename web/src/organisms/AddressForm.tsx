import { useService } from "@xstate/react";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Input from "../atoms/Input";
import NavigationButton from "../atoms/NavigationButton";
import { Name, Rest, Row } from "../atoms/Row";
import { MachineContext } from "../MachineContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const AddressForm = (): JSX.Element => {
  const { t } = useTranslation();
  const machine = useContext(MachineContext);
  const [current, send] = useService(machine);
  const {
    context: { address },
  } = current;
  const [firstName, setFirstName] = useState(address?.firstName ?? "");
  const [lastName, setLastName] = useState(address?.lastName ?? "");
  const [street, setStreet] = useState(address?.street ?? "");
  const [postalCode, setPostalCode] = useState(address?.postalCode ?? "");
  const [city, setCity] = useState(address?.city ?? "");

  const handlePreviousClick = (): void => {
    send("PREV");
  };

  const handleNextClick = (): void => {
    send("ADDRESS_COMPLETED", {
      address: { firstName, lastName, street, postalCode, city },
    });
  };

  return (
    <Form>
      <Input
        value={firstName}
        placeholder={t("First name")}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <Input
        value={lastName}
        placeholder={t("Last name")}
        onChange={(event) => setLastName(event.target.value)}
      />
      <Input
        value={street}
        placeholder={t("Street")}
        onChange={(event) => setStreet(event.target.value)}
      />
      <Input
        value={postalCode}
        placeholder={t("Postal code")}
        onChange={(event) => setPostalCode(event.target.value)}
      />
      <Input
        value={city}
        placeholder={t("City")}
        onChange={(event) => setCity(event.target.value)}
      />
      <Row>
        <Name>
          <NavigationButton to="/cart" onClick={handlePreviousClick}>
            {"<<"} {t("Cart")}
          </NavigationButton>
        </Name>
        <Rest>
          <NavigationButton to="/payment" onClick={handleNextClick}>
            {t("Payment")} {">>"}
          </NavigationButton>
        </Rest>
      </Row>
    </Form>
  );
};

export default AddressForm;
