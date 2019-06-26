import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const link_1 = {
  width: '100px',
  padding: '12px',
  margin: '0 440px 100px',
  textDecoration: 'underline overline',
  color: 'white',
}

const link_2 = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#1DA598',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div className="Navbar">
    <NavLink className="NavTitle"
      to="/"
      exact
      style={link_1}

    >Pic The Best Pic</NavLink>
    <NavLink
      to="/photo/new"
      exact
      style={link_2}
      activeStyle={{
        background: 'orange'
      }}
    >+ Submit Your Own Pic</NavLink>
  </div>;


export default (Navbar)
