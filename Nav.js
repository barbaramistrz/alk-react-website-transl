import React, {createContext, useContext, useState} from 'react';
import './Nav.css';
import {LangContext} from './App'
import { NavLink } from 'react-router-dom';

const Nav = () => {
   const dictionary = useContext(LangContext);

  return (
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">{dictionary.navText[0]}</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">{dictionary.navText[1]}</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact">{dictionary.navText[2]}</NavLink>
      </li>
    
    </ul>
  )
}

export default Nav;