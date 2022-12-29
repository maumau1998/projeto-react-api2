import React from 'react'
import {CardPrincipal,SpanLevel} from './CardDigimon.styled'
import { levelGetColor } from '../../utils/ColorCards'
import { levelGetColor2 } from '../../utils/LevelColor'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { Link } from 'react-router-dom'

const CardDigimon = (props) => {
    
    const {cadaDigimon, digimon, isDigidex, isHomePage} = props
    const context = useContext(GlobalContext)
    const {adicionarDigidex,removeDigidex,inOpenModal,detalhes, setDetalhes, setFlow,setTrocaButtom} = context

    function modalEDigidex () {
      setFlow(1)
      inOpenModal()
      adicionarDigidex(cadaDigimon)
    }
    function modalERemove () {
      setFlow(1)
      inOpenModal()
      removeDigidex(digimon)
    }
    const aparecerModal = (digimonAdicionar) => {
      const isAlreadyOnDigidex = detalhes.find(
        (digimonDigidex) => digimonDigidex.name === digimonAdicionar.name
      )
      if (!isAlreadyOnDigidex) {
        const newDigidex = [digimonAdicionar];
        setDetalhes(newDigidex);
        setFlow(2)
        inOpenModal()
        setTrocaButtom(1)
    }
      if (isAlreadyOnDigidex) {
        const newDigidex = [digimonAdicionar];
        setDetalhes(newDigidex);
        setFlow(2)
        inOpenModal()
    }
  }
    
  return (
    <>
    {isHomePage && <CardPrincipal color={levelGetColor(cadaDigimon.level)}>
        <div className="ladoEsquerdo">
        <h2>{cadaDigimon.name}</h2>
        <SpanLevel color={levelGetColor2(cadaDigimon.level)}>{cadaDigimon.level}</SpanLevel>
        <div className='sobre'><Link onClick={()=>aparecerModal(cadaDigimon)} className='linkDetalhes'>Detalhes</Link></div>
        <button className='buttonDigidex' onClick={()=>modalEDigidex()}>Digidex</button>
        </div>
        <div className="ladoDireito">
        <img src={cadaDigimon.img}/>
        </div>
    </CardPrincipal>}
    {isDigidex && <CardPrincipal color={levelGetColor(digimon.level)}>
        <div className="ladoEsquerdo">
        <h2>{digimon.name}</h2>
        <SpanLevel color={levelGetColor2(digimon.level)}>{digimon.level}</SpanLevel>
        <div className='sobre'><Link onClick={()=>aparecerModal(digimon)} className='linkDetalhes'>Detalhes</Link></div>
        <button className='buttonExcluir' onClick={()=>modalERemove()}>Excluir</button>
        </div>
        <div className="ladoDireito">
        <img src={digimon.img}/>
        </div>
    </CardPrincipal>}
    </>
  )
}

export default CardDigimon