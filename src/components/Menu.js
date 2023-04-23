import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";

function Menu() {
 
    return ( <nav className="menu">
                <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item" } to="/">Главная</NavLink>
                <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item" } to="/drift">Дрифт-такси</NavLink>
                <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item" } to="/timeattack">Time Attack</NavLink>
                <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item" } to="/forza">Forza Karting</NavLink>
            </nav>);
  }

  export default Menu;