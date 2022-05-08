import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderContainer = styled.div`
display: flex;
position: absolute;
top: 50%;
left: 53%;
`

const LoaderWrapper = styled.div`
border: 10px solid #f3f3f3;
  border-top: 10px solid #535c69; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`


function Loader() {
  return (
    <LoaderContainer>
      <LoaderWrapper />
    </LoaderContainer>
  )
}

export default Loader