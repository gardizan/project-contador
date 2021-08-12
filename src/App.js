import React, {useState, useEffect} from 'react'

import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'

import './styles.css'


function App() {

  const [numeroVoltas, setNumeroVoltas] = useState(0)
  const [correr, setCorrer] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(()=> {
    let timer = null
    if(correr) {
      timer = setInterval(()=> {
        setTempo((antigo) => antigo + 1)
      }, 1000)
    }
    return () => {
      if(timer) { // valor que é convertido para verdadeiro
        clearInterval(timer)
      }
    }
  }, [correr])

  const incrementarVoltas = () => {
    setNumeroVoltas(numeroVoltas + 1)
  }
  const decrementarVoltas = () => {
    setNumeroVoltas(numeroVoltas - 1)
  }


  let [btnCorrer, setBtnCorrer] = useState('Iniciar')

  const toggleCorrer = () => {
    setCorrer(!correr)
    if(correr === false) {
      setBtnCorrer(btnCorrer = 'Pausar')
    } else {
      setBtnCorrer(btnCorrer = 'Iniciar')
    }
  }
  
  const reset = () => {
    setNumeroVoltas(0)
    setTempo(0)
    setBtnCorrer(btnCorrer = 'Iniciar')
  }


  return (
    <div className='App'>
      <MostraVoltas voltas={numeroVoltas} />
      <div className="container-btn">
        <Button onClick={incrementarVoltas} text='+' />
        <Button onClick={decrementarVoltas} text='-' />
      </div>
      
      {
        numeroVoltas > 0 &&
        <MostraTempo tempo = {Math.round(tempo / numeroVoltas)} />  
      }
      <div className="container-btn">
        <Button onClick={toggleCorrer} text={btnCorrer} />
        <Button onClick={reset} text='Reiniciar' />
      </div>
    </div>
  );
}

export default App;
