import React from 'react'
import styled from 'styled-components'
import FirtsPage from '../component/FirstPages/index'
import withHelmet from '../util/withHelmet'
import ActionContext from '../contexts/ActionContext'

const Container =styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 justify-content:center;
 align-items:center;

`
function ActionPage(state){
    switch (state) {
        case 0:
          return 0;
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
            return 4;
        case 4:
            return 4;
        case 5:
            return 4;
        case 6:
            return 4;
        case 7:
            return 4;
        default:
          return 'Unknown';
      }
}
function ActionAspirint(state){
    switch (state) {
        case 0:
          return 0;
        case 1:
          return 2;
        case 2:
          return 3;
        default:
          return 'Unknown';
      }
}
function Home (){
    const { stepPage, condiPage, handleFunc } = React.useContext(ActionContext)
    const [step, setStep] = stepPage 
    const [condi, setCondi] = condiPage
    const [handleNext,handleBack,handleReset] = handleFunc
    
    return (
       <Container>
           {condi === 0 ? <FirtsPage /> : null}
           {ActionPage(step)}
           {step >= 0 && step <= 6 ? <button onClick={handleNext}>Next</button> : null }
           {step >= 1 && step <= 7 ? <button onClick={handleBack}>handleBack</button> : null }
       </Container>
    )
}

export default withHelmet('Home')(Home)