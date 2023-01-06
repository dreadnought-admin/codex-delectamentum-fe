import React from 'react'
import { NavLink, Link } from 'react-router-dom'



const Header = () => {

  let audio = new Audio("../music/tavernmusic.mp3")
  const start = () => {
    audio.play()
  }


  return (
    <header>
      <div className="logoContainer">
        <Link to="/">
          <img className="siteLogo" src="../images/codex_logo.png"></img>
          <img className="link" src="../images/link_gif.gif"></img>
        </Link>
        </div>
      <nav className="navigation">
        
        
        <div className="buttonBar">
        <NavLink className="navButton" exact to="/recipes">View Recipes
        </NavLink>

        <NavLink className="navButton" to="/recipes/new">Submit a Recipe
        </NavLink>

        <NavLink className="navButton" to="/users">View Users & Reviews
        </NavLink>

        <button className="button" onClick={start}>🎶</button>
        </div>
      </nav>
    </header>
  )
}

export default Header



