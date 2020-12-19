import React from 'react'
import styled from 'styled-components'
import FirtsPage from '../component/FirstPages/index'
import withHelmet from '../util/withHelmet'

const Container =styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 justify-content:center;
 align-items:center;

`

function Home (){
    return (
       <Container>
           <FirtsPage />
       </Container>
    )
}

export default withHelmet('Home')(Home)