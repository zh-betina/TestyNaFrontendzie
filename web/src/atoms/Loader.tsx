import React from "react";
import styled from "styled-components";
import loading from "../assets/icons/loading.svg";

const AnimationContainer = styled.div`
  animation: spin 1s linear infinite;
  height: 25px;
  width: 25px;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = (): JSX.Element => {
  return (
    <AnimationContainer>
      <img alt={'loading-svg'} src={loading} height={50} width={50} />
    </AnimationContainer>
  );
};

export default Loader;
