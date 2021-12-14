import React from "react";
import styled from "styled-components";
import { ecos } from "../utils/info";

const Ecosystem = (props) => {
  return (
    <Wrapper id="ecosytem">
      <div className="title">
        <p>How To Get Started</p>
        <h2>thick layer of glacial ice that covers a large area of land.</h2>
      </div>
      <div className="container">
        {ecos.map((eco) => {
          return (
            <article key={eco.id}>
              <div className="img">
                <img src={eco.img} alt={eco.name} />
              </div>
              <div className="content">
                <h4>{eco.name}</h4>
                <p>{eco.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #efedff;
  padding: 3rem 10%;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    gap: 2rem;
  }
  article {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img img {
    width: 224px;
    height: 200px;
    object-fit: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content h4 {
    font-size: 2.5rem;
    font-weight: normal;
    padding: 2rem;
  }
  .content p {
    font-size: 1.7rem;
    padding: 0 0 1rem 0;
    line-height: 2;
    text-align: center;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    padding: 2rem 0;
  }
  .title p {
    font-size: 2rem;
  }
  .title h2 {
    font-size: 4rem;
  }
`;

export default Ecosystem;
