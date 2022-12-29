import styled from 'styled-components'

export const ContainderHeader = styled.div`
   width: 100%;
   height: 160px;
   display: grid;
   grid-template-colums: 1fr 1fr 1fr;
   display: flex;

   .ladoEsquerdo{
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
   }
   .ladoDireito{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .logo{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   .btnDigidex{
      background-color:#33A4F5;
      width: 287px;
      height: 74px;
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
      width: 200px;
      height: 40px;
      padding: 0 10px;
      font-size: 17px;
      font-weight: bold;
      color: white;
      background-color:#FF6262;
      border-radius: 8px;
   }
   .btnDigidex2{
      font-size: 24px;
      font-weight: bold;
      font-family: Helvetica;
      color: black;
      background-color: white;
      border: none;
      border-bottom: 3px solid black;
      cursor: pointer;
   }
 `