import React from 'react'
import Header from '../assets/Header/Header'
import {ContainerPrincipal, CardModal3, CardModal4} from './Digidex.styled'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import CardDigimon from '../assets/CardDigimon/CardDigimon'
import Modal from 'react-modal'

const Digidex = () => {
  const context = useContext(GlobalContext)
  const {
     digidex,
     digimon,
     openModal,
     closeModal, 
     customStyle, 
     flow,
     detalhes,
     setDigidex
    } = context
    function excluirTodosPokedex() {
      const arrayVazio = []
      setDigidex(arrayVazio)
      const pokedexString = JSON.stringify(arrayVazio)
      window.localStorage.setItem("digimon", pokedexString)
    }

  return (
    <>
    <Header isDigidex={true}/>
    <ContainerPrincipal>
    <div className='tituloDigidex'><h4>Meus Digimons<span className='quantidade'>{'('}{digidex.length}{')'}</span></h4><button className='btnExcluirTodos' onClick={()=>excluirTodosPokedex()}>Excluir Todos</button></div>
      {digimon && digidex.map((digis)=>{
        return <CardDigimon isDigidex={true} key={digis.name} digimon={digis}/>
      })}
    </ContainerPrincipal>
    <Modal
    isOpen={openModal}
    onRequestClose={closeModal}
    ariaHideApp={false}
    style={customStyle}
    >
     {flow === 1 && <CardModal3>
         <h1>Oh, no</h1>  
         <p>O Digimon foi removido da sua Digidex</p>
     </CardModal3>
     }
     {flow === 2 &&<CardModal4>
         <h1>{detalhes['0'].name}</h1>  
         <img src={detalhes['0'].img}/>
         <p>DIGIMON {'('}abreviação de "Digital Monsters"{')'} é uma franquia japonesa
         lançada em 1997, criada pela fabricante <a href='https://en.wikipedia.org/wiki/Bandai'>Bandai</a>,</p>
     </CardModal4>
     }
    </Modal>
    </>
  )
}

export default Digidex