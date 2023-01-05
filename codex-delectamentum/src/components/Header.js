import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logoContainer">
          <img className="siteLogo" src=""></img>
        </div>
      <h1>
        <Link to="/">Home</Link>
      </h1>
      <nav className="navigation">
        
        
        <div className="buttonBar">
        <NavLink exact to="/recipes">View Recipes
        </NavLink>

        <NavLink to="/recipes/new">Submit a Recipe
        </NavLink>

        <NavLink to="#">View Users & Reviews
        </NavLink>

        </div>
      </nav>
    </header>
  )
}

export default Header



