import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../contexts/AuthContext";

import styles from "./Navbar.module.css";

import { useState } from "react";

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsOpen(!isOpen);
  }

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      
      <NavLink className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <div className={styles.menuIcon} onClick={toggleMenu}>
      &#9776;
      </div>
      <ul className={`${styles.links_list} ${isOpen ? styles.open : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleLinkClick}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleLinkClick}>
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleLinkClick}>
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
                onClick={handleLinkClick}>
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleLinkClick}>
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;