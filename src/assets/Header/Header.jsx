import React from 'react'
import {ContainderHeader} from './Header.styled'
import Logo from '../logo.jpg'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useContext } from 'react'

const Header = (props) => {
  const context = useContext(GlobalContext)
  const {digimon} = context
  const {isDigidex, isHomePage, setOrdenar,isDetalhes} = props
  const navigate = useNavigate()
  const goToDigidex = () => {
    navigate("/digidex")
  }
  const goToHomePage = () => {
    navigate("/")
  }
  const onChangeLevel = (e) => {
    setOrdenar(e.target.value)
  }
  return (
    <ContainderHeader>
      <div className="ladoEsquerdo">
     {isDigidex && <button onClick={goToHomePage} className='btnDigidex2'>{"<"}Todos Digimons</button>}
     {isDetalhes && <button onClick={goToHomePage} className='btnDigidex2'>{"<"}Todos Digimons</button>}
     {isHomePage && <label>Level:</label>}
     {isHomePage && <select onChange={onChangeLevel}>
          <option value=''>Todos Digimons</option>  
          <option value='In Training'>In Training</option>
          <option value='Rookie'>Rookie</option>
          <option value='Champion'>Champion</option>
          <option value='Ultimate'>Ultimate</option>
          <option value='Fresh'>Fresh</option>
          <option value='Mega'>Mega</option>
          <option value='Training'>Training</option>
          <option value='Armor'>Armor</option>
        </select>}
      </div>
      <div className="logo"><img src={Logo}/></div>
      <div className="ladoDireito">
        {isHomePage && <button onClick={goToDigidex} className='btnDigidex'>Digidex</button>}
      </div>
    </ContainderHeader>
  )
}

export default Header