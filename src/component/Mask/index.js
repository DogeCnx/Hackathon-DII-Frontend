import React from "react";
import styled from "styled-components";
import Image from "./Image";
import img from "../../assets/medicalmask.png";
import ActionContext from "../../contexts/ActionContext";
const Container = styled.div`
  width: 40vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Prompt", sans-serif;
  background-color: #EEEE;
  border-radius: 5%;
  box-shadow: 15px 15px 5px -5px gray;
  p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    color: black;
  }
  
 
`;
const Box = styled.div`
  width: 50vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top:1rem;
  
`;
const Button = styled.div`
  width: 20px;
  height: 20px;
  background-color:gray;
  align-items:center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left:1rem;
  margin-right:1rem;
`;

const Text = styled.div`
  width: 15vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left:0.5rem;
  p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    color: black;
    display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
  }
`;
const PayButton = styled.div`
  width: 200px;
  height: 50px;
  font-size: 20px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  background-color: #009900;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:1rem;
  font-family: 'Prompt', sans-serif;
  :hover {
    background-color: #00CC00;
  }
`;


function Scan() {
  const { Mask, handleFunc } = React.useContext(ActionContext)
  const [numberM, setNumberM,price , setPricce,pageMask , setPageMask,handleMinus,handlePlus ] = Mask
  const [handleNext,handleBack1,handleBack2,handleReset,handleBack3 ] = handleFunc
  return (
    <Container>
      <Box>
        <Image src={img} />
      </Box>
      <Text>
      <p>จำนวน: <Button onClick={handleMinus}>-</Button>{numberM}<Button onClick={handlePlus}>+</Button></p>
      </Text>
      <p>ราคา: {price} บาท</p>
      <PayButton onClick={handleNext}>ชำระเงิน</PayButton>
    </Container>
  );
}

export default Scan;
