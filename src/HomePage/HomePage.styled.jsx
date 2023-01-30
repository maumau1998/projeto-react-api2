import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 25px 25px;
    background-color: #4A4A4A;

    h1{
        width: 100%;
        height: 120px;
        font-size: 200%;
        display: flex;
        align-items: center;
        font-family: Helvetica;
        color: white;
        padding-left: 2%;
    }
    .quantidadeDigimon{
        margin-left: 28px;
    }
`
export const CardModal = styled.div`
     width: 100%;
     height: 400px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     font-family: Helvetica;
     gap: 20px;

     h1{
        font-size: 48px;
     }
     p{
        font-size: 18px;
        font-weight: bold;
     }
`
export const CardModal2 = styled.div`
     width: 500px;
     height: 550px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     font-family: Helvetica;
     padding: 40px 60px;
     gap: 20px;

     h1{
        font-size: 48px;
     }
     p{
        font-size: 18px;
        font-weight: bold;
     }
     .btnDetalhesModal{
         font-size: 20px;
         padding: 10px 80px; 
         border-radius: 8px;
         background-color: limegreen;
         color: white;
         border: none;
         cursor: pointer;
     }
     .btnDetalhesModal:hover{
      background-color: green;
     }
     .btnDetalhesModal2{
         font-size: 20px;
         padding: 10px 80px; 
         border-radius: 8px;
         background-color: red;
         color: white;
         border: none;
         cursor: pointer;
     }
     .btnDetalhesModal2:hover{
      background-color: #FF6262;
     }
`
