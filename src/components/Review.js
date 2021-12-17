import React, { useState } from "react";
import { reviews } from "../utils/info";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";

const Review = (props) => {
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(0);

  const handleNextClick = () => {
    setIndex((oldIndex) => {
      if (oldIndex >= reviews.length - 1) {
        return 0;
      }
      return oldIndex + 1;
    });
    setCheck((oldCheck) => {
      if (oldCheck === index) {
        return index;
      }
    });
  };

  const handlePrevClick = () => {
    setIndex((oldIndex) => {
      if (oldIndex <= 0) {
        return reviews.length - 1;
      }
      return oldIndex - 1;
    });
    setCheck((oldCheck) => {
      if (oldCheck === index) {
        return index;
      }
    });
  };

  return (
    <Wrapper id="review">
      <div className="title">
        <h1>Happy Moments</h1>
      </div>
      <div className={`${check ? "container active" : "container "}`}>
        <div className="img">
          <img src={reviews[index].image} alt={reviews[index].name} />
        </div>
        <div className="content">
          <div className="txt">
            <p>{reviews[index].title}</p>
            <h5>{reviews[index].name}</h5>
            <h4>{reviews[index].job}</h4>
          </div>
        </div>
      </div>
      <div className="controlers">
        <button className="prev" onClick={handlePrevClick}>
          <BsArrowLeft />
        </button>
        <button className="next" onClick={handleNextClick}>
          <BsArrowRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container{
    max-width: 60rem;
    text-align: center;
  }
  .img img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #6f6c9e;
    padding: 0.4rem;
    animation: showUp .2s linear backwards;
  }
  .txt p {
    line-height: 1.5;
    font-size: 2rem;
    padding: 1.5rem 0;
    font-weight: normal;
    text-align: center;
    color: #464646;
    animation: showUp .2s linear .4s backwards;
  }
  .title {
    margin: 1rem 0;
  }
  .title h1 {
    font-size: 3rem;
    font-weight: normal;
  }
  .txt h5 {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
    padding: 0.7rem;
    animation: showUp .2s linear .6s backwards;
}
  }
  .txt h4 {
    font-size: 1.7rem;
    text-align: center;
    font-weight: normal;
    animation: showUp .2s linear .8s backwards;
  }
  .controlers button {
    margin: 1rem 1rem;
    background: transparent;
    border: none;
    outline: none;
    font-size: 3rem;
    font-weight: 900;
    transition: 0.4s linear;
    cursor: pointer;
  }
  .controlers button:hover {
    transform: scale(1.5);
  }

  @keyframes showUp {
    0% {
    opacity: 0;
    -webkit-transform: translateY(4rem);
    transform: translateY(4rem);
  }
}
`;

export default Review;
