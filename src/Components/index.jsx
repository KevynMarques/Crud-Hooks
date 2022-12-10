import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
 
 export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    background-color : #1e7fee;
  } 
 
`; 

export const BoxBase = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`

export const BoxCenter= styled.div`
width: 500px;
height: 500px;
background-color: white;
`