import React from "react";
import styled from "styled-components";
import Image from "./Image";
import img from "../../assets/man.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.div`
  width: 45vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 5rem;
  p {
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;
    font-family: "Prompt", sans-serif;
  }
`;

const Box = styled.div`
  width: 60vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 45vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5%;
`;

function Stomachache() {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Image src={img} />
        </Box>
        <Text>
          <p>อาการ: ปวดท้อง</p>
          <p>ยา: ยาลดกรด</p>
          <p>ราคา: 13 บาท</p>
          <p>
            คำแนะนำ: รับประทานครั้งละ1-2 เม็ด วันละ3-4 ครั้ง หลังอาหารและก่อนนอน
          </p>
        </Text>
      </Wrapper>
    </Container>
  );
}
export default Stomachache;