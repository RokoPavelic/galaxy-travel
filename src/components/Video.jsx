import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import spaceVideo from "../assets/space.mp4";

const Video = () => {
  return (
    <Hero>
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} tyoe="video/mp4" />
      </video>

      <Content>
        <h1>Galaxy. Travel.</h1>
        <p>World`s first civilian space travel.</p>

        <Buttons>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </Buttons>
      </Content>
    </Hero>
  );
};

export default Video;

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: contain;

  #video {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const Content = styled.div`
  text-align: center;
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  top: 40vh;

  h1 {
    font-size: 4rem;
    color: #fff;
  }

  p {
    font-size: 1.8rem;
    font-weight: 200;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    color: #fff;
  }

  @media screen and (max-width: 640px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 1.6rem;
    }
  }
`;

const Buttons = styled.div`
  .btn {
    margin: 1rem 0.2rem;
  }
`;
