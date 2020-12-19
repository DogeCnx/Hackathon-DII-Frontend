import React from "react";
import styled from "styled-components";
import HowToUse1 from "../component/HowToUse1";
import withHelmet from '../util/withHelmet'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#009900;
  color: #ffffff;
`;

function Howto1() {
  return (
    <Container>
      <HowToUse1 />
    </Container>
  );
}

export default withHelmet('Howtouse1')(Howto1);
