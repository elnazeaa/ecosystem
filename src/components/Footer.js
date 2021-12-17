import React from "react";
import styled from "styled-components";
import {
  fisrtSection,
  secondSection,
  thirdSection,
  fourthSection,
} from "../utils/info";

const Footer = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="box">
          <h4>Links</h4>
          {fisrtSection.map((item) => {
            return (
              <a key={item.id} href={item.url}>
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="box">
          <h4>Other Links</h4>
          {secondSection.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </div>
        <div className="box">
          <h4>Contact Us</h4>
          {thirdSection.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </div>
        <div className="box">
          <h4>Follow Us</h4>
          {fourthSection.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 10%;
  background-color: #efedff;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 1rem;
  }
  .box a {
    display: block;
    font-size: 2rem;
    padding: 1rem 0;
    color: #6f6c9e;
  }
  .box li {
    display: block;
    font-size: 2rem;
    padding: 1rem 0;
    color: #6f6c9e;
  }
  .box h4 {
    font-size: 2.7rem;
    font-weight: normal;
    padding: 1rem 0;
  }
`;

export default Footer;
