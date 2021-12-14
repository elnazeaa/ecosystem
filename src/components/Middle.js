import React from "react";
import styled from "styled-components";
import { items } from "../utils/info";

const MiddleSection = (props) => {
  return (
    <Wrapper id="news">
      <div className="container">
        {items.map((item) => {
          return (
            <article className="item" key={item.id}>
              <div className="img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.message}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 10%;
  background: #efedff;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    gap: 1.5rem;
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img img {
    height: 12rem;
    object-fit: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
  .content h3 {
    font-size: 2.8rem;
    text-align: center;
    font-weight: normal;
    margin: 0.4rem 0;
  }
  .content p {
    font-size: 13px;
    padding: 1rem 12px;
    text-align: center;
    line-height: 1.9;
  }
  .item {
    background: #fff;
    border-radius: 5px;
    padding: 2rem 0;
  }
`;

export default MiddleSection;
