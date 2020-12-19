import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import img from '../../assets/credit-cards.png' 

const Container =styled.div`
 width:100vw;
 height:100vh;
 background-color:#009900;
 display:flex;
 justify-content:center;
 align-items:center;
`
const Box =styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;

 p{
     margin-top:1rem;
     font-size:2rem;
     color:white;
 }

`

function Scan (){
    return(
        <Container>
          <Box>
              <Image src={img} />
              <p>กรุณาสแกนบัตรประชน</p>
          </Box>
        </Container>
    )
}

export default Scan