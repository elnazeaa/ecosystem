import React from "react";
import styled from "styled-components";
import banner from "../images/header/banner.jpg";
import eco from "../images/header/Ecosystem-amico.svg";
const Header = (props) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${banner})` }} id="#home">
      <div className="img">
        <img src={eco} alt="header banner" />
      </div>
      <div className="content">
        <h1>Ecosystems can be very large or very small</h1>
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
    width: 100%;
  }
  .content {
    flex: 1 1 35rem;
    display: flex;
    flex-direction: column;
  }
  .content h1 {
    font-size: 4.5rem;
    color: #fff;
    line-height: 1.8;
    text-shadow: 0.3rem 0.3rem 0 rgb(223 223 223 / 20%);
  }
  .content p {
    font-size: 13px;
    color: #fff;
    max-width: 450px;
    line-height: 1.8;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 10%;
    .content h1 {
      font-size: 2.5rem;
    }
  }
`;

export default Header;
