import React from "react";
import styled from "styled-components";
import TypePill from "../component/typePill";
import withHelmet from "../util/withHelmet";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #009900;
  color: #ffffff;
`;

function Pill() {
  return (
    <Container>
      <TypePill />
    </Container>
  );
}

export default withHelmet("TypePill")(Pill);
