import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import img from '../../assets/credit-cards.png'
import BarcodeReader from 'react-barcode-reader' 
import ActionContext from '../../contexts/ActionContext'
const Container =styled.div`
 width:100vw;
 height:50vh;
 display:flex;
 justify-content:center;
 align-items:center;
 font-family: 'Prompt', sans-serif;
`
const Box =styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;

 p{
     margin-top:1rem;
     font-size:2rem;
     font-weight:500;
     color:black;
 }

`

function Scan (){
    const { handleFunc,StateAA } = React.useContext(ActionContext)
    const [handleNext,handleReset] = handleFunc
    const [stateA, setStateA ] = StateAA
    const handleScan = (data) => {
        setStateA({
          result: data
        })
        handleNext()
    } 
    return(
        <Container>
          <Box>
          <BarcodeReader
          onScan={handleScan}/>
              <Image src={img} />
              <p>กรุณาสแกนบัตรประชน</p>
          </Box>
        </Container>
    )
}

export default Scan