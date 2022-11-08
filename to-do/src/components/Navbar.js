import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary ps-3">
        <div className="navbar-brand">
            Список дел
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
            <NavLink
                className="nav-link"
                to="/"

                >
                    Главная
                </NavLink>
            </li>
            <li className="navbar-item">
            <NavLink
                className="nav-link"
                to="/about"
                >
                    Информация
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}
  
export default Navbar;