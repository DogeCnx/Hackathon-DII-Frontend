import React from "react";
import styled from "styled-components";
import withHelmet from "../util/withHelmet";
import Suggest from "../component/Suggest/index";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009900;
  color: #ffffff;
`;

function Dispense() {
  return (
    <Container>
      <Suggest />
    </Container>
  );
}

export default withHelmet("Dispense")(Dispense);
