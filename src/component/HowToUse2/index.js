import React from "react";
import styled from "styled-components";
import Image from "./Image";
import img from "../../assets/symptom.png";
import img2 from "../../assets/select.png";
import img3 from "../../assets/pay.png";
import img4 from "../../assets/receive.png";

const ContainerToUse = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;
const Content = styled.div`
  height: auto;
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1rem;
  margin-left: 7rem;
`;
const Text = styled.h1`
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextNum = styled.h1`
  font-size: 2rem;
  margin: 0rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box1 = styled.h1`
  display: flex;
  width: 30vw;
  /* margin-bottom: 1.5rem; */
`;
const Box2 = styled.h1`
  display: flex;
  width: 40vw;
`;

function HowToUse2() {
  return (
    <ContainerToUse>
      <TextContainer>วิธีการใช้ของผู้ป่วยที่รับยาไม่ต่อเนื่อง</TextContainer>
      <Content>
        <Box1>
          <TextNum>1</TextNum>
          <Image src={img} />
          <Text>เลือกอาการ</Text>
        </Box1>
        <Box2>
          <TextNum>2</TextNum>
          <Image src={img2} />
          <Text>เลือกยาน้ำหรือยาเม็ด</Text>
        </Box2>
      </Content>
      <Content>
        <Box1>
          <TextNum>3</TextNum>
          <Image src={img3} />
          <Text>จ่ายเงิน</Text>
        </Box1>
        <Box2>
          <TextNum>4</TextNum>
          <Image src={img4} />
          <Text>รอรับยา</Text>
        </Box2>
      </Content>
    </ContainerToUse>
  );
}

export default HowToUse2;
