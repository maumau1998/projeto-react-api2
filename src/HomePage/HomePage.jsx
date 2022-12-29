import React, { useState } from 'react'
import CardDigimon from '../assets/CardDigimon/CardDigimon'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import {ContainerPrincipal,CardModal,CardModal2} from './HomePage.styled'
import Header from '../assets/Header/Header'
import Modal from 'react-modal'

const HomePage = () => {
  const [ordenar, setOrdenar] = useState("")
  const context = useContext(GlobalContext)
  const {
     digimon,
     digidex,
     openModal,
     closeModal,
     customStyle, 
     flow,detalhes,
     adicionarDigidex,
     trocarButtom,
     setTrocaButtom,
     removeDigidex
    } = context

  const filterDigimon = () =>
    digimon.filter(
      (pokemonInList) =>
        !digidex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
     
    
  return (
    <>
    <Header isHomePage={true} setOrdenar={setOrdenar}/>
    <ContainerPrincipal>
      <h1><span>Todos Digimons</span><span className='quantidadeDigimon'>{'('}{digimon.length - digidex.length}{')'}</span></h1>
     {ordenar ? (<>
     {digimon &&
     filterDigimon().map((cadaDigimon)=>{
        return cadaDigimon.level === ordenar && <CardDigimon
                key={cadaDigimon.name}
                cadaDigimon={cadaDigimon}
                isHomePage={true}
                />
     })
     }</>):(<>{filterDigimon().map((cadaDigimon)=>{
      return  <CardDigimon
              key={cadaDigimon.name}
              cadaDigimon={cadaDigimon}
              isHomePage={true}
              />
   })}</>)}
    </ContainerPrincipal>
    <Modal
    isOpen={openModal}
    onRequestClose={closeModal}
    ariaHideApp={false}
    style={customStyle}
    >
     {flow === 1 &&<CardModal>
         <h1>Parabéns</h1>  
         <p>O Digimon foi adicionado a sua Digidex</p>
     </CardModal>
     }
     {flow === 2 &&<CardModal2>
         <h1>{detalhes['0'].name}</h1>  
         <img src={detalhes['0'].img}/>
         <p>DIGIMON {'('}abreviação de "Digital Monsters"{')'} é uma franquia japonesa
         lançada em 1997, criada pela fabricante <a href='https://en.wikipedia.org/wiki/Bandai'>Bandai</a>,</p>
         {detalhes.length === 1 && trocarButtom === 1 && detalhes.map((digis)=>{
           return <button className='btnDetalhesModal' onClick={()=>{
            setTrocaButtom(2)
            adicionarDigidex(digis)
           }}>Adicionar á Digidex</button>
         })}
         {detalhes.length === 1 && trocarButtom === 2 && detalhes.map((digis)=>{
           return <button className='btnDetalhesModal2' onClick={()=>{
            removeDigidex(digis)
            setTrocaButtom(1)
          }}>Remover da Digidex</button>
         })}
     </CardModal2>
     }
    </Modal>
    </>
  )
}

export default HomePage