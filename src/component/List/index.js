import React from "react";
import styled from "styled-components";
import Image from "./Image";
import img from "../../assets/check.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: 'Prompt', sans-serif;
`;
const Wrapper = styled.div`
  width: 40vw;
  height: 80vh;
  background-color: #EEEE;
  border-radius: 5%;
  box-shadow: 15px 15px 5px -5px gray;

  h1 {
    text-align: center;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }
  h2{
      font-size:1.5rem;
      display:flex;
      justify-content:flex-end;
      margin-right:3rem;
      margin-top:3rem;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3rem;
  margin-top: 1.5rem;

  p {
    margin-top: -0.2rem;
    font-size: 1.5rem;
    color: black;
    margin-left: 1rem;
  }
`;

function Scan() {
  return (
    <Container>
      <Wrapper>
        <h1>รายการยา</h1>
        <Box>
          <Image src={img} />
          <p>ยาลดน้ำตาลในเลือด</p>
        </Box>
        <Box>
          <Image src={img} />
          <p>ยาขับปัสสาวะ</p>
        </Box>
        <Box>
          <Image src={img} />
          <p>ยาลดความดัน</p>
        </Box>
        <Box>
          <Image src={img} />
          <p>ยาลดปวดเมื่อยตามร่างการ</p>
        </Box>
        <Box>
          <Image src={img} />
          <p>ยาหยอดตา</p>
        </Box>
        <Box>
          <Image src={img} />
          <p>ยาหอม</p>
        </Box>
        <h2>ราคา: 580 บาท</h2>
      </Wrapper>
    </Container>
  );
}

export default Scan;
