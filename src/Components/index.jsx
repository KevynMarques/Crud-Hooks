import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
 
 export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    background-color: white;
    border-radius: 5px;
  } 
`; 

export const BoxBase = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color : #1e7fee;
`

export const BoxCenter= styled.div`
width: 50%;
min-height: 30%; 
display: flex;
align-items: center;
flex-direction: column;

h1 {
  text-align: center;
  color: green;
  margin-bottom: 10px;
  margin-top: 10px;
}

input {
  padding: 4px;
  width: 200px;
}

button {
 border-style: inset;
 margin-left: 10px;
 cursor: pointer; 

 
 :hover {
 color: green;
 } 
 
} 
`

export const BoxList = styled.ul`


  li {
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size:18px;
    border: solid 1px;
    margin-left: -25px;
    min-width: 200px;
    min-height: 25px;
    margin-top: 10px;
    word-break: break-all; 
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 20px;


  } 

  button { 
 border-style:none;
 cursor: pointer; 
 :hover {
 color: #ff0000;
 } 
  }
`
