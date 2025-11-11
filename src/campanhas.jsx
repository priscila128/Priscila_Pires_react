// Campanhas.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdecef; /* mantém o rosa claro */
  padding: 80px 100px;
  overflow: hidden;
  text-align: center;
  min-height: 100vh;

  /* meio círculo lateral */
  &::after {
    content: "";
    position: absolute;
    right: -250px;
    top: 50%;
    transform: translateY(-50%); /* ✅ centraliza verticalmente */
    width: 950px;
    height: 950px;
    background-color: #f5b7c4;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    padding: 50px 20px;
  }
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 42px;
  color: #1a1a1a;
  margin-bottom: 60px;
  z-index: 2;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  z-index: 2;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 25px 30px;
  width: 350px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: left;

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
  }

  ul {
    margin: 0;
    padding-left: 18px;
  }

  li {
    font-size: 15px;
    margin-bottom: 8px;
    color: #444;
  }
`;

export default function Campanhas() {
  return (
    <Section id="campanhas">
      <Title>Campanhas e Apoios</Title>
      <Content>
        <Box>
          <h3>Campanhas de Conscientização</h3>
          <ul>
            <li>Outubro Rosa: prevenção e diagnóstico precoce.</li>
            <li>Toque de Vida: incentivo ao autoexame.</li>
            <li>Se Tocal: informação e autocuidado.</li>
          </ul>
        </Box>

        <Box>
          <h3>Instituições e Apoios</h3>
          <ul>
            <li>Oncoguia: suporte e orientação.</li>
            <li>Hospital de Amor: tratamento gratuito.</li>
            <li>Rede Feminina: acolhimento e ajuda.</li>
          </ul>
        </Box>
      </Content>
    </Section>
  );
}
