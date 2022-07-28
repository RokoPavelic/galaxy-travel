import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterCointainer>
        <Left>
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>123 Acme st.</p>
              <h4>Huston, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              1-800-123-1234
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              trips@galaxy.com
            </h4>
          </div>
        </Left>

        <Right>
          <h4>About the company</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam"
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </Right>
      </FooterCointainer>
    </FooterWrap>
  );
};

export default Footer;
const FooterWrap = styled.div`
  width: 100%;
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.8);
`;

const FooterCointainer = styled.div`
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .location {
    display: flex;
    align-items: center;

    p {
        padding-bottom: .5rem;
    }

    h4 {
        padding-top:0;
    }
  }



  h4 {
    font-size: 1.4rem;
    padding 1rem 0;
  }

  p {
    font-size: 1.2rem;
    padding 1rem 0;
  }
`;
const Right = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: auto;

  h4 {
    font-size: 1.4rem;
    padding 1rem 0;
  }

  p {
    font-size: 1.2rem;
    padding 1rem 0;
  }
 .social {
    @media screen and (max-width: 640px) {
        margin:auto;
      }
 }
 
`;
