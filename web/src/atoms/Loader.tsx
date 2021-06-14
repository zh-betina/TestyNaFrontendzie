import React from "react";
import styled from "styled-components";
import loading from "../assets/icons/loading.svg";

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationContainer = styled.div`
  animation: spin 1s linear infinite;
  height: 50px;
  width: 50px;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = (): JSX.Element => {
  return (
    <Container>
      <AnimationContainer>
        <img alt="loading-svg" src={loading} height={50} width={50} />
      </AnimationContainer>
    </Container>
  );
};

export default Loader;
