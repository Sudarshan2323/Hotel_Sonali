import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Index from './Component/Index/Index'
import Menu from './Component/Menu/Menu'
import Gallery from './Component/Gallery/Gallery'
import About from './Component/About/About'
import Login from './Component/Login/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Index/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/blog' element={<Gallery/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
