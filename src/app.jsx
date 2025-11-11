import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import bannerImg from "./assets/mulheres.png";
import lacoIcon from "./assets/lacoIcon.png";

import Sobre from "./sobre";
import Prevencao from "./prevencao";
import Estatisticas from "./estatisticas";
import Campanhas from "./campanhas";
import Contato from "./contato";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;700&display=swap');

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #fdecef;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fdecef;
  overflow: hidden;
  position: relative;

  /* textura de bolinhas no fundo */
  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        rgba(255, 192, 203, 0.3) 12%,
        transparent 12%
      )
      repeat;
    background-size: 120px 120px;
    z-index: 0;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 18px 70px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 22px;
    font-weight: 700;
    color: #e91e63;
    letter-spacing: 1px;
    margin: 0;

    span {
      color: #ff80ab;
    }
  }
`;

const Icon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const NavMenu = styled.nav`
  a {
    text-decoration: none;
    color: #444;
    font-weight: 500;
    margin-left: 35px;
    font-size: 15px;
    transition: color 0.3s ease;

    &:hover {
      color: #e91e63;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
      margin: 5px 15px;
    }
  }
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px;
  background-color: #fdecef;
  overflow: hidden;
  flex-wrap: wrap;
  z-index: 1;
  min-height: 80vh;

  &::after {
    content: "";
    position: absolute;
    right: -150px;
    top: 50%;
    transform: translateY(-50%);
    width: 800px;
    height: 800px;
    background-color: #f5b7c4;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
    min-height: auto;
  }
`;

const TextBox = styled.div`
  max-width: 440px;
  z-index: 2;

  h2 {
    font-size: 44px;
    font-family: 'Playfair Display', serif;
    color: #333;
    line-height: 1.2;
    margin: 0;
  }

  p {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #777;
    margin: 18px 0 28px;
    font-size: 13px;
  }

  button {
    background-color: #c54b7b;
    color: #fff;
    border: none;
    padding: 14px 36px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #b13e6d;
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 40px;

    h2 {
      font-size: 36px;
    }
  }
`;

const ImageBox = styled.div`
  z-index: 2;

  img {
    max-width: 440px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <TextBox>
        <h2>
          COM APOIO <br /> A VIDA SEGUE
        </h2>
        <p>JUNTAS, SOMOS MAIS FORTES</p>
        <button onClick={() => navigate("/prevencao")}>
          CONHEÇA OS SINTOMAS
        </button>
      </TextBox>

      <ImageBox>
        <img src={bannerImg} alt="Mulheres unidas na campanha Outubro Rosa" />
      </ImageBox>
    </HeroSection>
  );
}

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo>
            <Icon src={lacoIcon} alt="Laço Rosa Ícone" />
            <h1>
              LAÇO <span>ROSA</span>
            </h1>
          </Logo>

          <NavMenu>
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/prevencao">Prevenção e sintomas</Link>
            <Link to="/estatisticas">Estatísticas</Link>
            <Link to="/campanhas">Campanhas e apoio</Link>
            <Link to="/contato">Contate-nos</Link>
          </NavMenu>
        </Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/prevencao" element={<Prevencao />} />
          <Route path="/estatisticas" element={<Estatisticas />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
    </>
  );
}