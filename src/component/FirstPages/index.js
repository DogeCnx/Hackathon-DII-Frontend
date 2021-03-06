import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import img from '../../assets/medicine.png'
import img2 from '../../assets/hospital.png'
import img3 from '../../assets/mask.png'
import ActionContext from '../../contexts/ActionContext'
import HowToUse2 from '../HowToUse2/index'
import Symptom from '../Symptom/index'
import Pill from '../typePill/index'
import Diarrhea from '../Suggest/diarrhea'
import Drung from '../Suggest/drug'
import IndexSuggest from '../Suggest/index'
import Stomachache from '../Suggest/stomachache'
import List from '../List/index'
import Scan from '../Scan/index'
import QRCodeCom from '../QRCode/index';
import Covid from '../Suggest/covid'
import Mask from '../Mask/index'


const Container =styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
`
const WrapperBox =styled.div`
 width:70vw;
 height:20vh;
 display:flex;
 justify-content:space-between;
 align-items:center;
h3{
    font-family: 'Prompt', sans-serif;
    font-size:1.5rem;
}
`
const Box=styled.div`
 width:400px;
 height:300px;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 h2{
    font-family: 'Prompt', sans-serif;
    font-weight:600;
    font-size:2rem;
 }
 :hover{
     background-color:#009900;
     color:white;
     border-radius:5%;
 }
`
const Wrapper =styled.div`
 width:auto;
 height:auto;
 display:flex;
 flex-direction:row;
`
const Button =styled.div`
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
  margin-left:1rem;
  font-family: 'Prompt', sans-serif;
  :hover {
    background-color: #00CC00;
  }
`
function ActionPage(state,symptom,pillData){
    switch (state) {
        case 0:
          return null;
        case 1:
          return <HowToUse2 />;
        case 2:
          return <Symptom/>;
        case 3:
            if(symptom.Diarrhea && !symptom.Stomach ){
                return <Diarrhea/>
            }
            else if(symptom.Stomach&& !symptom.Diarrhea){
                return <Stomachache/>
            }
            else if(symptom.fever && symptom.SoreThroat && symptom.Cough && symptom.Headache && symptom.RunnyNose && symptom.Racers){
                return <Covid />
            }
            else if(symptom.Cough && !symptom.Stomach ){
                return <Drung/>
            }
            else {
                return <IndexSuggest/>
            }
        case 4:
            return <Pill />;
        case 5:
            return <List />;
        case 6:
            return <QRCodeCom/>;
        default:
          return 'Unknown';
      }
}
function ActionAspirint(state){
    switch (state) {
        case 0:
          return null;
        case 1:
          return <Scan />;
        case 2:
          return <List />;
        case 3:
            return <QRCodeCom />;
        default:
          return 'Unknown';
      }
}

function ActionMask(state){
    switch (state) {
        case 0:
          return null;
        case 1:
          return <Mask/>;
        case 2:
            return <QRCodeCom />;
        default:
          return 'Unknown';
      }
}

function FirtsPage (){
    const handleClick1 = () => {
        setCondi(condi+1)
        handleNext()
    }
    const handleClick2 = () => {
        setCondi(condi-1)
        handleNext()
    }
    const handleClick3 = () => {
        setPageMask(pageMask+1)
        handleNext()
    }
    const { stepPage, condiPage, handleFunc,symptoms,pills,Mask } = React.useContext(ActionContext)
    const [handleNext,handleBack1,handleBack2,handleReset,handleBack3 ] = handleFunc
    const [condi, setCondi] = condiPage
    const [step, setStep] = stepPage 
    const [symptom , setSymptom] = symptoms
    const [pillData, setPill] = pills
    const [numberM, setNumberM,price , setPricce,pageMask , setPageMask,handleMinus,handlePlus ] = Mask
    return (
        <Container>
            {condi == 0 && pageMask == 0 ? 
            <WrapperBox>
                <Box onClick={handleClick1}>
                    <Image src={img} />
                    <h2>ยาสามัญประจำบ้าน</h2>
                </Box>
                <Box onClick={handleClick2}>
                    <Image src={img2} />
                    <h2>รับยาตามหมอนัด</h2>
                </Box>
                <Box onClick={handleClick3}>
                    <Image src={img3} />
                    <h2>ซื้อแมส</h2>
                </Box>
            </WrapperBox>
            :null}
             {condi > 0 ? ActionPage(step,symptom,pillData) : condi < 0 ? ActionAspirint(step) : ActionMask(step) }
            <Wrapper>
            {step >= 1 && step <= 6 && condi == 1 && step !== 4? <Button onClick={handleBack1}>กลับ</Button> : null }  
            {step >= 0 && step <= 5 && condi == 1 && step !== 4? <Button onClick={handleNext}>ต่อไป</Button> : null }
            {condi == -1 ? <Button onClick={handleReset}>กลับ</Button>: null}      
            {condi == -1 && step == 2? <Button onClick={handleNext}>ต่อไป</Button>: null}
            {step == 2  && pageMask > 0 ? <Button onClick={handleBack3}>กลับ</Button> : null }  
            {step == 0  && pageMask > 0  ? <Button onClick={handleNext}>ต่อไป</Button> : null }
            </Wrapper>
        </Container>
    )
}

export default FirtsPage