import React from "react"
import axios from 'axios'
import { useState, useEffect } from "react"
import { BASE_URL } from "./constants/url"
import { GlobalContext } from './contexts/GlobalContext'
import Router from "./Rotas/Router"

function App() {
 const [digimon, setDigimon] = useState([])
 const [digidex, setDigidex] = useState([])
 const [openModal, setOpenModal] = useState(false)
 const [detalhes, setDetalhes] = useState([])
 const [flow, setFlow] = useState()
 const [trocarButtom, setTrocaButtom] = useState(1)
 
 useEffect(()=>{
  fetchDigimon()
  getFromLocalStorage()
 },[])
 const fetchDigimon = async () => {
     try{
        const responseAPI = await axios.get(BASE_URL)
        setDigimon(responseAPI.data)
     }
     catch(error){  
     }
 }
 const adicionarDigidex = (digimonAdicionar) => {
    const isAlreadyOnDigidex = digidex.find(
      (digimonDigidex) => digimonDigidex.name === digimonAdicionar.name
    );
    if (!isAlreadyOnDigidex) {
      const newDigidex = [...digidex, digimonAdicionar];
      setDigidex(newDigidex);
      const digidexString = JSON.stringify(newDigidex)
      window.localStorage.setItem("digimon", digidexString)
    }
  }
  const removeDigidex = (digimonRemove) => {
    const newDigidex = digidex.filter(
      (digimonPokedex) => digimonPokedex.name !== digimonRemove.name
    );
    setDigidex(newDigidex)
    const digidexString = JSON.stringify(newDigidex)
    window.localStorage.setItem("digimon", digidexString)
  };
  const getFromLocalStorage = () => {
    if(localStorage.getItem("digimon")){
      const newDigidex= localStorage.getItem("digimon")
      const digidex2 = JSON.parse(newDigidex)
      setDigidex(digidex2)}
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  const inOpenModal = () => {
    setOpenModal(true)
  }
  const customStyle = {
    content : {
      top: '50%',
      left: '50%',
      bottom: 'auto',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '12px',
      border: '2px solid black'
    }
  }
 const context = {
    digimon,
    digidex,
    setDigidex,
    adicionarDigidex,
    removeDigidex,
    openModal,
    setOpenModal,
    closeModal,
    inOpenModal,
    customStyle,
    detalhes,
    setDetalhes,
    flow,
    setFlow,
    trocarButtom,
    setTrocaButtom
 }

  return (
    <div className="App">
     <GlobalContext.Provider value={context}>
         <Router/>
     </GlobalContext.Provider>
      </div>
  )
}

export default App
