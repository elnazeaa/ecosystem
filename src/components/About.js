import React from "react";
import styled from "styled-components";
import babyShark from "../images/about/Baby Shark-amico 1.svg";

const About = (props) => {
  return (
    <Wrapper id="about">
      <div className="img">
        <img src={babyShark} alt="" />
      </div>
      <div className="content">
        <h2>Even similar biomes could have completely different</h2>
        <p>
          Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Non Facilis
          Dolore Earum Ex Mollitia Repudiandae, Asperiores Expedita. Ratione
          Iusto Rem Labore Repudiandae Ad Odit, Officiis Nobis. Perferendis
          Laudantium.
        </p>
        <p>
          Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Fuga Numquam
          Nobis Illo Consequuntur Omnis Sapiente Aliquid Necessitatibus Dolorem?
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 10%;
  background: #fff8f2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .img {
    flex: 1 1 35rem;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .img img {
    width: 75%;
  }
  .content {
    flex: 1 1 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content h2 {
    font-size: 3.5rem;
    line-height: 1.4;
    font-weight: normal;
  }
  .content p {
    font-size: 16px;
    color: #000;
    line-height: 1.8;
    padding: 1rem 7rem 0 0;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 768px) {
    .content {
      flex: 1 1 40rem;
    }
    .img {
      flex: 1 1 40rem;
    }
    .img img {
      width: 100%;
    }
  }
`;

export default About;
