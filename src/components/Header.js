import React from "react";
import styled from "styled-components";
import banner from "../images/header/banner.jpg";
import eco from "../images/header/Ecosystem-amico.svg";
const Header = (props) => {
  return (
    <Wrapper id="home">
      <div className="img">
        <img src={eco} alt="header banner" />
      </div>
      <div className="content">
        <h1>
          <span className="line">Ecosystems</span> can be very large or very
          small
        </h1>
        <p>
          An ecosystem is a geographic area where plants, animals, and other
          organisms, as well as weather and landscape, work together to form a
          bubble of life. Ecosystems contain biotic or living, parts, as well as
          abiotic factors, or nonliving parts. Biotic factors include plants,
          animals, and other organisms. Abiotic factors include rocks,
          temperature, and humidity.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-position: center;
  background-repeat: no-repeat;
  background: #fff8f2;
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 10%;
  .img {
    flex: 1 1 35rem;
    display: flex;
    justify-content: end;
  }
  .img img {
    width: 75%;
  }
  .content {
    flex: 1 1 35rem;
    display: flex;
    flex-direction: column;
  }
  .content h1 {
    font-size: 4.5rem;
    color: #000;
    line-height: 1.8;
    font-weight: normal;
  }
  .content p {
    font-size: 13px;
    color: #000;
    max-width: 450px;
    line-height: 1.8;
  }
  .line {
    position: relative;
    display: inline-block;
    z-index: 0;
  }
  .line::before {
    content: "";
    position: absolute;
    bottom: 1.1rem;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: #6f6c9e;
    z-index: -1;
    clip-path: polygon(0 83%, 100% 74%, 100% 100%, 0% 100%);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 10%;
    .content h1 {
      font-size: 2.5rem;
    }
    .img img {
      width: 100%;
    }
  }
`;

export default Header;
