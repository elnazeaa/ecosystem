import React from "react";
import styled from "styled-components";
import forest from "../images/featurs/Forest-bro 1.svg";
import ice from "../images/featurs/ice.svg";
import seoson from "../images/featurs/Seasonchange.svg";
import rain from "../images/featurs/raining.svg";

const Features = (props) => {
  return (
    <Wrapper id="featurs">
      <div className="title">
        <h2>What we Offer to our Supporters</h2>
        <p>Who are in extremely love with eco friendly system..</p>
      </div>
      {/* ==== */}
      <div className="container">
        <div className="img1">
          <img src={forest} alt="forest" />
        </div>
        <div className="content1">
          <h3>the strategy of applying profit</h3>
          <p>
            Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Iusto Nisi
            Fugit Saepe Quisquam Adipisci. Consectetur Ipsum Cumque Beatae
            Accusantium Similique Mollitia Commodi, Atque Laborum, Id, Eos Illo
            Recusandae!
          </p>
          <button>Read More</button>
        </div>
      </div>
      {/* ====== */}
      <div className="container">
        <div className="content2">
          <h3>the strategy of applying profit</h3>
          <p>
            Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Iusto Nisi
            Fugit Saepe Quisquam Adipisci. Consectetur Ipsum Cumque Beatae
            Accusantium Similique Mollitia Commodi, Atque Laborum, Id, Eos Illo
            Recusandae!
          </p>
          <button>Read More</button>
        </div>
        <div className="img2">
          <img src={ice} alt="forest" />
        </div>
      </div>
      {/* ======= */}
      <div className="container">
        <div className="img1">
          <img src={seoson} alt="forest" />
        </div>
        <div className="content1">
          <h3>the strategy of applying profit</h3>
          <p>
            Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Iusto Nisi
            Fugit Saepe Quisquam Adipisci. Consectetur Ipsum Cumque Beatae
            Accusantium Similique Mollitia Commodi, Atque Laborum, Id, Eos Illo
            Recusandae!
          </p>
          <button>Read More</button>
        </div>
      </div>
      {/* =========== */}
      <div className="container">
        <div className="content2">
          <h3>the strategy of applying profit</h3>
          <p>
            Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Iusto Nisi
            Fugit Saepe Quisquam Adipisci. Consectetur Ipsum Cumque Beatae
            Accusantium Similique Mollitia Commodi, Atque Laborum, Id, Eos Illo
            Recusandae!
          </p>
          <button>Read More</button>
        </div>
        <div className="img2">
          <img src={rain} alt="forest" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 10%;
  background: #fff8f2;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .container:nth-child(odd) {
    flex-flow: wrap-reverse;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
  }
  .title h2 {
    font-size: 3rem;
    font-weight: normal;
  }
  .title p {
    font-size: 1.5rem;
    color: #777;
  }
  .img1 {
    flex: 1 1 40rem;
    display: flex;
    justify-content: end;
  }
  .img2 {
    flex: 1 1 40rem;
    display: flex;
    justify-content: start;
  }
  .img1 img,
  .img2 img {
    width: 100%;
  }
  .content1 {
    flex: 1 1 40rem;
    padding: 0 0 0 4rem;
  }
  .content2 {
    flex: 1 1 40rem;
    padding: 0 0 0 4rem;
  }
  .content1 h3,
  .content2 h3 {
    font-size: 3rem;
    line-height: 1.5;
    font-weight: normal;
  }
  .content1 p,
  .content2 p {
    padding: 1.5rem 0;
    line-height: 2;
    font-size: 1.7rem;
    color: #777;
  }
  button {
    display: inline-block;
    margin-top: 1rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    color: #777;
    background: #e3c09b;
    border: 0.2rem solid #6f6c9e;
    cursor: pointer;
    font-weight: bolder;
    border-radius: 0.5rem;
  }
`;

export default Features;
