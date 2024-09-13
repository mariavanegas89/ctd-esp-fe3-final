import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
import '../Styles/Navbar.Component.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME"});
  };

  return (
    <nav className="navbar">
      <Link to= '/'><h4>Home</h4></Link>
      <Link to= '/contact/'><h4>Contacto</h4></Link>
      <Link to= '/favs'><h4>Favoritos</h4></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleToggleTheme}><img src={state.theme ? "/public/images/moon-ico.png" :"/public/images/sun-ico.png"} alt="theme-icon" />
        </button>
    </nav>
  )
}

export default Navbar