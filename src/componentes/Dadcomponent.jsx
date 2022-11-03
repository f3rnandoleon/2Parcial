import React from 'react'
import "../styles/dadcomponent.css"
import { Componente1 } from './Componente1'
import { Componente2 } from './Componente2'
import { Componente3 } from './Componente3'

function Dadcomponent() {
  return (
    <div class="container">
     <Componente1 />
     <Componente2 />
     <Componente3 />
  </div>
  )
}

export {Dadcomponent}