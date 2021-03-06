import React from 'react'

export const ActionContext = React.createContext({})

export const ActionContextProvider = ({children}) => {
    const [step, setStep ] = React.useState(0)
    const [condi, setCondi] = React.useState(0)

    const handleNext = () => {
        setStep((step) => step+1)
    }
    const handleBack1 = () => {
        setStep((step) => step-1)
        if (step == 1 && condi == 1) {
            setCondi((condi) => condi-1)
        }
        if(step == 4 && pillData == 1){
            setPill(0)
        }
    }
    const handleBack2 = () => {
        setStep((step) => step-1)
        if (step == 1 && condi == -1) {
            setCondi((condi) => condi+1)
        }
        if(step == 4 && pillData == -1){
            setPill(0)
        }
    }
    const handleBack3 = () => {
        setStep((step) => step-1)
        if (step == 1 && pageMask == 1) {
            setPageMask((pageMask) => pageMask-1)
        }
    }
    const handleReset = () => {
        setStep(0)
        setCondi(0)
        setPageMask(0)
    }
    const [symptom , setSymptom] = React.useState({
        fever: undefined,
        SoreThroat: undefined,
        RunnyNose: undefined,
        Cough: undefined,
        Racers: undefined,
        Diarrhea: undefined,
        Stomach: undefined,
        Headache: undefined

    })
    const [pillData, setPill ] = React.useState(0)
    const [stateA, setStateA ] = React.useState({
        result: 'No result'
    })
    

    const [state, setState] = React.useState('white')
    const [state2, setState2] = React.useState('white')
    const [state3, setState3] = React.useState('white')
    const [state4, setState4] = React.useState('white')
    const [state5, setState5] = React.useState('white')
    const [state6, setState6] = React.useState('white')
    const [state7, setState7] = React.useState('white')
    const [state8, setState8] = React.useState('white')
   
    const [ stateButton, setStateButton] = React.useState('black')
    const [ stateButton2, setStateButton2] = React.useState('black')
    const [ stateButton3, setStateButton3] = React.useState('black')
    const [ stateButton4, setStateButton4] = React.useState('black')
    const [ stateButton5, setStateButton5] = React.useState('black')
    const [ stateButton6, setStateButton6] = React.useState('black')
    const [ stateButton7, setStateButton7] = React.useState('black')
    const [ stateButton8, setStateButton8] = React.useState('black')

    const [numberM, setNumberM] = React.useState(0);
    const [price , setPricce ] = React.useState(0);
    const [pageMask , setPageMask ] = React.useState(0);
    const handlePlus = () => {
        setNumberM(numberM+1)
        setPricce((price) => price+5)
    }
    const handleMinus = () => {
        if(numberM <= 0) {
            setNumberM(0)
            setPricce(0)
        }
        else{
            setNumberM((numberM) => numberM-1)
            setPricce((price) => price-5)
        }
    }

    const valueAction = { 
        stepPage : [step , setStep],
        condiPage : [condi, setCondi],
        handleFunc : [handleNext,handleBack1,handleBack2,handleReset,handleBack3 ],
        symptoms :  [symptom , setSymptom],
        StateCh : [state, setState,state2, setState2,state3, setState3,state4, setState4,state5, setState5,state6, setState6,state7, setState7,state8, setState8,
            stateButton, setStateButton, stateButton2, setStateButton2, stateButton3, setStateButton3,stateButton4, setStateButton4, stateButton5, setStateButton5,
            stateButton6, setStateButton6,stateButton7, setStateButton7,stateButton8, setStateButton8],
        pills : [pillData, setPill ],
        StateAA : [stateA, setStateA ],
        Mask : [numberM, setNumberM,price , setPricce,pageMask , setPageMask,handleMinus,handlePlus ]
    }

    return <ActionContext.Provider value={valueAction}>{children}</ActionContext.Provider>
}
export default ActionContext