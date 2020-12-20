import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import img from '../../assets/medicine.png'
import img2 from '../../assets/hospital.png'
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


const Container =styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 align-items:center;
 justify-content:center;
`
const WrapperBox =styled.div`
 width:60vw;
 height:100vh;
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
function ActionPage(state,symptom,pillData){
    switch (state) {
        case 0:
          return null;
        case 1:
          return <HowToUse2 />;
        case 2:
          return <Symptom/>;
        case 3:
            if(symptom.Diarrhea && !symptom.Stomach){
                return <Diarrhea/>
            }
            else if(symptom.Stomach&& !symptom.Diarrhea){
                return <Stomachache/>
            }
            else if(symptom.Cough && !symptom.Stomach){
                return <Drung/>
            }
            else if(symptom.fever && symptom.SoreThroat && symptom.Cough && symptom.Stomach && symptom.Headache && symptom.RunnyNose && symptom.Diarrhea && symptom.Racers){
                return <Covid />
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
          return <Scan/>;
        case 2:
          return <List />;
        case 3:
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
    const { stepPage, condiPage, handleFunc,symptoms,pills } = React.useContext(ActionContext)
    const [handleNext,handleBack1,handleBack2,handleReset] = handleFunc
    const [condi, setCondi] = condiPage
    const [step, setStep] = stepPage 
    const [symptom , setSymptom] = symptoms
    const [pillData, setPill] = pills
    return (
        <Container>
            {condi == 0 ? 
            <WrapperBox>
                <Box onClick={handleClick1}>
                    <Image src={img} />
                    <h2>ยาสามัญประจำบ้าน</h2>
                </Box>
                    <h3>หรือ</h3>
                <Box onClick={handleClick2}>
                    <Image src={img2} />
                    <h2>รับยาตามหมอนัด</h2>
                </Box>
            </WrapperBox>
            :null}
            {condi >= 0  ? ActionPage(step,symptom,pillData) : ActionAspirint(step)}
            {step >= 0 && step <= 6 && condi == 1 ? <button onClick={handleNext}>Next</button> : null }
            {step >= 1 && step <= 7 && condi == 1 ? <button onClick={handleBack1}>handleBack</button> : null }  
            {condi == -1 ? <button onClick={handleReset}>Reset</button>: null}      
            {condi == -1 && step == 2? <button onClick={handleNext}>Next</button>: null}  
        </Container>
    )
}

export default FirtsPage