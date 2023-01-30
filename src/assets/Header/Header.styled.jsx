import styled from 'styled-components'

export const ContainderHeader = styled.div`
   width: 100%;
   height: 160px;
   display: grid;
   grid-template-colums: 1fr 1fr 1fr;
   display: flex;
   padding: 0 5px;

   .ladoEsquerdo{
    width: 25%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    padding-top: 30px;
   }
   .ladoDireito{
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .logo{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .btnDigidex{
      background-color:#33A4F5;
      width: 287px;
      height: 3rem;
      font-size: 24px;
      font-weight: bold;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
   }
   img{
    width: 90%;
    height: 90%;
   }
   label{
      font-size: 25px;
      font-family: Helvetica;
      margin-right: 10px;
      font-weight: bold;
   }
   select{
      width: 90%;
      height: 40px;
      padding: 0 10px;
      font-size: 17px;
      font-weight: bold;
      color: white;
      background-color:#FF6262;
      border-radius: 8px;
      position: relative;
      bottom: 20px;
   }
   .btnDigidex2{
      font-size: 110%;
      max-width: 150px;
      width: 80%;
      font-weight: bold;
      font-family: Helvetica;
      color: black;
      background-color: white;
      border: none;
      border-bottom: 3px solid black;
      cursor: pointer;
   }
   .btnDigidex: hover{
      background-color: blue;
   }
 `