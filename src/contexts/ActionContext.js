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
    }
    const handleBack2 = () => {
        setStep((step) => step-1)
        if (step == 1 && condi == -1) {
            setCondi((condi) => condi+1)
        }
    }
    const handleReset = () => {
        setStep(0)
        setCondi(0)
    }

    const valueAction = { 
        stepPage : [step , setStep],
        condiPage : [condi, setCondi],
        handleFunc : [handleNext,handleBack1,handleBack2]
    }

    return <ActionContext.Provider value={valueAction}>{children}</ActionContext.Provider>
}
export default ActionContext