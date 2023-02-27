import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";
import "./navigation.css";
export default function Navigation() {
  const DarkModeToggle = () => {
    const toggleThemeChange = () => {
      document.documentElement.classList.toggle("dark");
    };
    return (
      <Link
        to="#"
        className="switch"
        onClick={() => toggleThemeChange()}
      >
        <input type="checkbox" />
        <span className="slider round" />
      </Link>
    );
  };
  return (
    <header>
      <div className="header">
        <Link to="/" className="headerLogo">
          PLAYER
        </Link>
        <Navbar
          alignLinks="right"
          menuIcon={<Icon>menu</Icon>}
          options={{
            preventScrolling: true,
          }}
        >
          <NavItem>
            <Link to="/">
              <Icon left>home</Icon> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">
              <Icon left>contacts</Icon>Contact
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about">
              <Icon left>info_outline</Icon>About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/new">
              <Icon left>dvr</Icon>New
            </Link>
          </NavItem>
        </Navbar>
        {DarkModeToggle()}
      </div>
    </header>
  );
}
