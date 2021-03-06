import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import img from '../../assets/fever.png'
import img2 from '../../assets/cough.png'
import img3 from '../../assets/runny-nose.png'
import img4 from '../../assets/sneezing.png' 
import img5 from '../../assets/fatigue.png' 
import img6 from '../../assets/diarrhea.png' 
import img7 from '../../assets/diarrhea1.png' 
import img8 from '../../assets/headache.png' 
import ActionContext from '../../contexts/ActionContext'

const Container =styled.div`
 width:100vw;
 height:80vh;
 display:flex;
 align-items:center;
 justify-content:center;
`
const WrapperBox =styled.div`
 width:70vw;
 height:100vh;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
`
const Box=styled.div`
 width:200px;
 height:220px;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 margin-left:1rem;
 border-radius:5%;
 background-color: ${props => props.state ? props.state : 'white'};
 color: ${props => props.stateButton ? props.stateButton : 'black' };
 h2{
    font-family: 'Prompt', sans-serif;
    font-weight:600;
    font-size:2rem;
    margin-top:0.5rem;
    text-align:center;
 }
 :hover{
     background-color:#009900;
     color:white;
     
 }

`
const BoxM =styled.div`
 width:70vw;
 height:30vh;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:row;
 margin-top:1rem;
`

function Symptom (){
    const {symptoms, StateCh } = React.useContext(ActionContext)
    const [symptom , setSymptom] = symptoms
    const [state, setState,state2, setState2,state3, setState3,state4, setState4,state5, setState5,state6, setState6,state7, setState7,state8, setState8,
        stateButton, setStateButton, stateButton2, setStateButton2, stateButton3, setStateButton3,stateButton4, setStateButton4, stateButton5, setStateButton5,
        stateButton6, setStateButton6,stateButton7, setStateButton7,stateButton8, setStateButton8] = StateCh 
    
    const handleClick = () => {
        if(!symptom.fever){
            setState(() => setState('#009900'))
            setStateButton(() => setStateButton('Black'))
            setSymptom({...symptom,fever:'have'})
        }
        else{
            setState((state) => setState(state === 'white' ? '#009900': 'white'))
            setStateButton((stateButton => setStateButton(stateButton === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,fever:undefined})
        }
        console.log(symptom.fever)
    }
    const handleClick2 = () =>  {
        if(!symptom.SoreThroat){
            setState2((state2) => setState2(state2 === 'white' ? '#009900': 'white'))
            setStateButton2((stateButton2 => setStateButton2(stateButton2 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,SoreThroat:'have'})
        }
        else{
            setState2((state2) => setState2(state2 === 'white' ? '#009900': 'white'))
            setStateButton2((stateButton2 => setStateButton2(stateButton2 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,SoreThroat:undefined})
        }
    }
    const handleClick3 = () => {
        if(!symptom.RunnyNose){
            setState3((state3) => setState3(state3 === 'white' ? '#009900': 'white'))
            setStateButton3((stateButton3 => setStateButton3(stateButton3 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,RunnyNose:'have'})
        }
        else{
            setState3((state3) => setState3(state3 === 'white' ? '#009900': 'white'))
            setStateButton3((stateButton3 => setStateButton3(stateButton3 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,RunnyNose:undefined})
        }
        console.log(symptom.RunnyNose)
    }
    const handleClick4 = () => {
        if(!symptom.Cough){
            setState4((state4) => setState4(state4 === 'white' ? '#009900': 'white'))
            setStateButton4((stateButton4 => setStateButton4(stateButton4 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Cough:'have'})
        }
        else{
            setState4((state4) => setState4(state4 === 'white' ? '#009900': 'white'))
            setStateButton4((stateButton4 => setStateButton4(stateButton4 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Cough:undefined})
        }
        console.log(symptom.Cough)
    }
    const handleClick5 = () => {
        if(!symptom.Racers){
            setState5((state5) => setState5(state5 === 'white' ? '#009900': 'white'))
            setStateButton5((stateButton5 => setStateButton5(stateButton5 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Racers:'have'})
        }
        else{
            setState5((state5) => setState5(state5 === 'white' ? '#009900': 'white'))
            setStateButton5((stateButton5 => setStateButton5(stateButton5 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Racers:undefined})
        }
        console.log(symptom.Racers)
    }
    const handleClick6 = () => {
        if(!symptom.Diarrhea){
            setState6((state6) => setState6(state6 === 'white' ? '#009900': 'white'))
            setStateButton6((stateButton6 => setStateButton6(stateButton6 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Diarrhea:'have'})
        }
        else{
            setState6((state6) => setState6(state6 === 'white' ? '#009900': 'white'))
            setStateButton6((stateButton6 => setStateButton6(stateButton6 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Diarrhea:undefined})
        }
        console.log(symptom.Diarrhea)
    }
    const handleClick7 = () => {
        if(!symptom.Stomach){
            setState7((state7) => setState7(state7 === 'white' ? '#009900': 'white'))
            setStateButton7((stateButton7 => setStateButton7(stateButton7 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Stomach:'have'})
        }
        else{
            setState7((state7) => setState7(state7 === 'white' ? '#009900': 'white'))
            setStateButton7((stateButton7 => setStateButton7(stateButton7 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Stomach:undefined})
        }
        console.log(symptom.Stomach)
    }
    const handleClick8 = () => {
        if(!symptom.Headache){
            setState8((state8) => setState8(state8 === 'white' ? '#009900': 'white'))
            setStateButton8((stateButton8 => setStateButton8(stateButton8 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Headache:'have'})
        }
        else{
            setState8((state8) => setState8(state8 === 'white' ? '#009900': 'white'))
            setStateButton8((stateButton8 => setStateButton8(stateButton8 === 'black' ? 'white' : 'black')))
            setSymptom({...symptom,Headache:undefined})
        }
        console.log(symptom.Headache)
    }
    return (
        <Container>
         <WrapperBox>
         <BoxM>
         <Box state={state} stateButton={stateButton} onClick={handleClick} >
         <Image src={img} />
         <h2>มีไข้</h2>
         </Box>

         <Box state={state2} stateButton={stateButton2} onClick={handleClick2} >
         <Image src={img2} />
         <h2>เจ็บคอ</h2>
         </Box>

         <Box state={state3} stateButton={stateButton3} onClick={handleClick3} >
         <Image src={img3} />
         <h2>มีน้ำมูก</h2>
         </Box>

         <Box state={state4} stateButton={stateButton4} onClick={handleClick4} >
         <Image src={img4} />
         <h2>ไอ</h2>
         </Box>
         
         </BoxM>
         <BoxM>
        
         <Box state={state5} stateButton={stateButton5} onClick={handleClick5} >
         <Image src={img5} />
         <h2>เหนื่อยหอบ</h2>
         </Box>

         <Box state={state6} stateButton={stateButton6} onClick={handleClick6} >
         <Image src={img6} />
         <h2>ท้องเสีย</h2>
         </Box>
         
         <Box state={state7} stateButton={stateButton7} onClick={handleClick7} >
         <Image src={img7} />
         <h2>ปวดท้องกระเพาะ</h2>
         </Box>
         
         <Box state={state8} stateButton={stateButton8} onClick={handleClick8} >
         <Image src={img8} />
         <h2>ปวดหัว</h2>
         </Box>
         </BoxM>
         
         </WrapperBox>
        </Container>
    )
}

export default Symptom