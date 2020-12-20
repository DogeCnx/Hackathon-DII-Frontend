import React from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #009900; */
`;
const Text = styled.div`
  width: 45vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5rem;
  color: black;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1rem;
  font-family: "Prompt", sans-serif;
  p {
    display: flex;
    font-size: 1.5rem;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
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
  background-color: #EEEE;
  border-radius: 5%;
  box-shadow: 15px 15px 5px -5px gray;
`;

function QRCodeCom() {
    return (
        <Container>
            <Wrapper>
                <Box>
                    <QRCode value={Math.floor((Math.random() * 1000) + 10)} />
                </Box>           
                <Text>
                  <p><div>ยอดสุทธิรวม&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div>580 บาทถ้วน</div></p>
                </Text>  
                <Text>
                  กรุณาสแกนเพื่อจ่ายเงิน
                </Text>     
            </Wrapper>
        </Container>
    )


}
export default QRCodeCom
