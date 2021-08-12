import React from 'react'

const MostraTempo = (props) => {

    const tempo = props.tempo
    const minutos = parseInt(tempo / 60)
    const segundos = tempo % 60
    const minutosStr = minutos < 10 ? '0' + minutos : minutos
    const segundosStr = segundos < 10 ? '0' + segundos : segundos
  
    return(
      <p>
        {`${minutosStr}:${segundosStr}`}
        <br />
        Tempo médio por volta
      </p>
    )
}

export default MostraTempo