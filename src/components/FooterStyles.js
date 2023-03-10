import styled from "styled-components";

export const Box = styled.div`
  bottom: 0;
  padding: 5px 5px;
  background: #343a40;
  height: auto;
  width: 100%;
  margin-top: 20px;
  @media (max-width: 1000px) {
    padding: 10px 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 10px;
`;

export const Row = styled.div`
  justify-content: center;
  margin: 5px;
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: red;
    font-size: 20px;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;
