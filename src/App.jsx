import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';

import Inicio from "./Componentes/Inicio"
import Coleccion from "./Componentes/Coleccion"
import Favoritos from "./Componentes/Favoritos"
import Info from "./Componentes/Info"
import Usuario from "./Componentes/Usuario"
import Pokemon from "./Componentes/Pokemon"

import "./App.css"

function App() {

  return (
    <>
    <Router>

      <nav className='c-menu'>
        <Link to="/">Inicio</Link>
        <Link to="/Coleccion">Coleccion</Link>
        <Link to="/Favoritos">Favoritos</Link>
        <Link to="/Info">Info</Link>
        <Link to="/Usuario">Usuario</Link>
      </nav>
      
      <Routes>
         <Route path="/" element={<Inicio />} />
         <Route path="/coleccion" element={<Coleccion />} />
         <Route path="/favoritos" element={<Favoritos />} />
         <Route path="/info" element={<Info />} />
         <Route path="/usuario" element={<Usuario />} />
         <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
    </>
   
  )
}

export default App
