import React from "react";
import styled from "styled-components";
import Image from "./Image";
import img from "../../assets/drug.png";
import img2 from "../../assets/mixture.png";
import ActionContext from '../../contexts/ActionContext'

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Prompt", sans-serif;
  h1 {
    font-size: 2rem;
    font-weight:600;
  }
`;
const WrapperBox = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-family: "Prompt", sans-serif;
    font-size: 1.5rem;
  }
`;
const Box = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: "Prompt", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    margin-top: 1.5rem;
  }
  :hover {
    background-color: #009900;
    color: white;
    border-radius: 5%;
  }
`;
function TypePill() {
  const { handleFunc,pills } = React.useContext(ActionContext)
  const [handleNext,handleBack1] = handleFunc
  const [pillData, setPill] = pills
  const handleClick1 = () => {
    handleNext()
    setPill(1)
  }
  const handleClick2 = () => {
    handleNext()
    setPill(-1)
  }
  return (
    <Container>
      <h1>ต้องการรับยาชนิดไหน ? </h1>
      <WrapperBox>
        <Box onClick={handleClick1}>
          <Image src={img} />
          <h2>ยาน้ำ</h2>
        </Box>
        <h3>หรือ</h3>
        <Box  onClick={handleClick2}>
          <Image src={img2} />
          <h2>ยาเม็ด</h2>
        </Box>
      </WrapperBox>
    </Container>
  );
}

export default TypePill;
