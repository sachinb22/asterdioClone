import React from 'react'
import './App.scss'
import Navbar from './containers/Navbar'
import Welcome from './views/Welcome'

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
    </div>
  )
}
export default App