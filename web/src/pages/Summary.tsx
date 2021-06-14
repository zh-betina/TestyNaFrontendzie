import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Loader from "../atoms/Loader";
import Container from "../templates/Container";
import tickIcon from "../assets/icons/tick.svg";

const SuccessMessage = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Summary = (): JSX.Element => {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(true);
    }, Math.random() * (3000 - 500) + 500);
  }, []);

  return (
    <Container>
      <SuccessMessage>
        {success ? (
          <>
            <img src={tickIcon} alt="tick-svg" height={50} />
            <h2>{t("Payment successfully completed.")}</h2>
            <h4>
              s
              {t(
                "Thank you for shopping at our store. Your order number is #{code}",
                {
                  code: Math.floor(
                    Math.random() * (2349284 - 1049224) + 1049224
                  ),
                }
              )}
            </h4>
          </>
        ) : (
          <Loader />
        )}
      </SuccessMessage>
    </Container>
  );
};

export default Summary;
