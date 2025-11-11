import React from "react";
import styled from "styled-components";
import origemImg from "./assets/origem.png"; // ajuste o caminho conforme sua pasta

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px;
  background-color: #fdecef;
  overflow: hidden;
  flex-wrap: wrap;

  /* Meio círculo rosa à direita */
  &::after {
    content: "";
    position: absolute;
    right: -250px;
    top: -20%;
    width: 1100px;
    height: 160%;
    background-color: #f8c9d7;
    border-radius: 50% 0 0 50%;
    z-index: 0;

    @media (max-width: 900px) {
      display: none;
    }
  }

  /* Bolinhas decorativas no fundo */
  &::before {
    content: "";
    position: absolute;
    top: -100px;
    left: -80px;
    width: 250px;
    height: 250px;
    background-color: #f8c3d3;
    border-radius: 50%;
    opacity: 0.45;
    z-index: 0;
  }

  div.decor {
    position: absolute;
    bottom: 100px;
    left: 180px;
    width: 180px;
    height: 180px;
    background-color: #f6a7bd;
    border-radius: 50%;
    opacity: 0.3;
    z-index: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
    background-color: #f8c9d7;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  max-width: 500px;
  z-index: 2;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 40px;
    color: #3a2b32;
    margin-bottom: 30px;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
    color: #4a3b41;
  }

  img {
    margin-top: 12%;
    width: 120%;
    max-width: 480px;
    border-radius: 15px;
  }

  @media (max-width: 900px) {
    margin-bottom: 40px;
    text-align: center;

    h2 {
      font-size: 32px;
    }

    img {
      max-width: 280px;
    }
  }
`;

const InfoBox = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  z-index: 2;
  max-width: 500px;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #333;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    padding: 25px 30px;
  }
`;

export default function Sobre() {
  return (
    <Section id="sobre">
      {/* bolinha extra */}
      <div className="decor"></div>

      <TextColumn>
        <h2>
          SOBRE O <br /> OUTUBRO ROSA
        </h2>
        <h3>ORIGEM:</h3>
        <img src={origemImg} alt="Linha do tempo da origem do Outubro Rosa" />
      </TextColumn>

      <InfoBox>
        <p>
          O Outubro Rosa é uma campanha mundial que alerta sobre a prevenção e o
          diagnóstico precoce do câncer de mama. Ele também conscientiza sobre a
          importância da saúde da mulher de forma ampla, incluindo o câncer de
          colo do útero.
        </p>
      </InfoBox>
    </Section>
  );
}
