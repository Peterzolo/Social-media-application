import React from 'react'

import "./App.css"
import Home from './componments/pages/home/Home'

const App = () => {
  return (
    <div className='App'>
      <div className="blur" style={{top : "-18%", right : "0"}}></div>
      <div className="blur" style={{top : "-36%", left : "-8"}}></div>
      <Home/>
    </div>
  )
}

export default App
