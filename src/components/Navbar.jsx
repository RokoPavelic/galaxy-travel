import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Header>
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Trainig</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </Header>
  );
};

export default Navbar;

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 10;

  .nav-menu {
    display: flex;
  }
  .nav-menu li {
    padding: 0 1rem;
  }

  .nav-menu a {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 1240px) {
    .hamburger {
      display: block;
    }
    .nav-menu {
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 0;
      left: -100%;
      text-align: center;
      width: 100%;
      height: 100vh;
      transition: 0.3s;
      z-index: -1;
      background: rgba(0, 0, 0, 0.9);
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-menu li {
      padding: 1rem 0;
    }

    .nav-menu a {
      font-size: 2rem;
    }
  }
`;
