import React from 'react';
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function App() {
  return (
    <div className="NavBar">
      {/* Move links into top right corner */}
      <NavLink to="/" id="NavBar-Yodlr">Yodlr</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/admin">Admin Page</NavLink>
      {/* All other components will be rendered here */}
    </div>
  );
}

export default App;