import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo_1.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = (props) => {
  const [isBar, setIsBar] = useState(true);
  return (
    <Wrapper>
      <Link to="/home" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <button
        className="btn"
        onClick={() => {
          setIsBar(!isBar);
        }}
      >
        {isBar ? (
          <FaBars style={{ color: "#e3c09b" }} />
        ) : (
          <FaTimes style={{ color: "#e3c09b" }} />
        )}
      </button>
      <nav className={`${isBar ? "navbar" : "navbar active"}`}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#about">About us</a>
        <a href="#ecosytem">Ecosystem</a>
        <a href="#featurs">Features</a>
        <a href="#review">Review</a>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: transparent;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
  background: #6f6c9e;
  z-index: 1000;
  .logo {
    height: 70px;
    width: 70px;
  }
  .logo img {
    width: 100%;
    object-fit: cover;
    margin: 0;
  }
  .navbar a {
    margin: 0 0.7rem;
    font-size: 1.7rem;
    color: #e3c09b;
  }
  .btn {
    font-size: 2.125rem;
    background: transparent;
    border: none;
    outline: none;
    display: none;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 1rem 3rem;

    .btn {
      display: block;
    }
    .navbar {
      position: absolute;
      top: 99%;
      left: 0;
      right: 0;
      background: #837fbd;
      display: flex;
      flex-direction: column;
      width: 100%;
      transition: 0.2s linear;
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    .navbar a {
      width: 100%;
      display: block;
      margin: 0.5rem 0;
    }
    .navbar {
      padding: 2rem 0.5rem;
    }
    .active {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

export default Navbar;
