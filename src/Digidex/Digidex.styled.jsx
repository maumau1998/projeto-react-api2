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

.tituloDigidex{
   width: 100%;
   height: 120px;
   font-size: 200%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   padding-left: 2%;
   font-family: Helvetica;
   color: white;
   justify-content: space-between;
}
.quantidade{
    margin-left: 25px;
    font-family: Helvetica;
}
h4{
   font-family: Helvetica;
}
.btnExcluirTodos{
   padding: 0.5rem 20px;
   font-size: 22px;
   border-radius: 12px;
   border: none;
   color: white;
   background-color: red;
   cursor: pointer;
}
.btnExcluirTodos:hover{
   background-color: #FF6262;
}
    
`
export const CardModal3 = styled.div`
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
export const CardModal4 = styled.div`
     width: 500px;
     height: 500px;
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
`