import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Column>
          <Heading>Social Media</Heading>
          <Row>
            <FooterLink href="https://www.facebook.com/">
              <BsFacebook style={{ marginRight: "5px" }} />
              <span>Facebook</span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <BsInstagram style={{ marginRight: "5px" }} />
              <span>Instagram</span>
            </FooterLink>
            <FooterLink href="https://twitter.com/login?lang=en">
              <BsTwitter style={{ marginRight: "5px" }} />
              <span>Twitter</span>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/">
              <BsYoutube style={{ marginRight: "5px" }} />
              <span>Youtube</span>
            </FooterLink>
          </Row>

          <Heading>About</Heading>
          <Row>
            <FooterLink href="/AboutUs">
              <span>About Us</span>
            </FooterLink>
            <FooterLink href="/ContactUs">
              <span>Contact Us</span>
            </FooterLink>
          </Row>
        </Column>
      </Container>
    </Box>
  );
};
export default Footer;