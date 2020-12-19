import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  width: 19vw;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`
const BackgroundOverylay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function BackgroundBlock ({ src, height = 35, children }) {
  return (
    <BackgroundImage src={src} height={height}>
      <BackgroundOverylay>{children}</BackgroundOverylay>
    </BackgroundImage>
  )
}
export default BackgroundBlock
