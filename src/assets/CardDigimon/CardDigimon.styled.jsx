import styled from 'styled-components'

export const CardPrincipal = styled.div`
   width: 440px;
   height: 210px;
   border-radius: 12px;
   display: flex;
   display:grid;
   grid-template-columns: 1fr 1fr;
   padding: 20px;
   background-color: ${(props) => props.color};

   img{
      width: 170px;
      height: 170px;
      border-radius: 50%;
      margin-left: 30px;
      border: 3px solid black;
   }
   .ladoEsquerdo{
      width: 170px;
   }
   .ladoDireito{
      width: 100%;
   }
   h2{
      font-size: 25px;
      color: white;
      font-family: Helvetica;
      font-style: normal;
      margin-bottom: 10px;
   }
   .buttonDigidex{
      width: 146px;
      height: 38px;
      padding: 5px 11px;
      font-size: 17px;
      font-weight: bold;
      border-radius: 8px;
      position: relative;
      top: 30px;
      cursor: pointer;
   }
   .buttonExcluir{
      width: 146px;
      height: 38px;
      padding: 5px 11px;
      font-size: 17px;
      font-weight: bold;
      border-radius: 8px;
      position: relative;
      top: 30px;
      cursor: pointer;
      color: white;
      background-color: #FF6262;
   }
   .linkDetalhes{
      color: white;
   }
   .sobre{
      border: none;
      color: white;
      font-weight: bold;
      width: fit-content;
      margin-top: 30px;
      cursor: pointer;
      color: white;
      font-size: 17px;
      font-family: Helvetica;
   }
`
export const SpanLevel = styled.span`
      background-color: ${(props)=> props.color};
      width: 97px;
      height: 31px;
      border: 1px dashed rgba(255, 255, 255, 0.47);
      padding: 6px 10px;
      font-weight: bold;
      font-size: 14px;
      color: white;
      border-radius: 8px;
      font-family: Helvetica;
      font-style: normal;
     
`