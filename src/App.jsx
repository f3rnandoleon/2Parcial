import React from 'react'
import { useState } from 'react'
import { Dadcomponent } from './componentes/Dadcomponent'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Dadcomponent />
    </div>
  )
}

export default App
