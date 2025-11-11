import React from "react";
import styled from "styled-components";
import graficoImg from "./assets/grafico.png";

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px;
  background-color: #fdecef;
  overflow: hidden;
  flex-wrap: wrap;

  &::after {
    content: "";
    position: absolute;
    right: -180px;
    top: 0;
    width: 960px;
    height: 120%;
    background-color: #f5b7c4;
    border-radius: 70% 0 0 70%;
    z-index: 0;

    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 50px 20px;
  }
`;

const TextContent = styled.div`
  z-index: 2;
  max-width: 520px;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 38px;
    margin-bottom: 25px;
    color: #333;
  }

  .dados, .impactos {
    background-color: #fff;
    border-radius: 12px;
    padding: 25px 30px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    text-align: left;
  }

  ul {
    margin: 10px 0 0 15px;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
    font-size: 15px;
    color: #444;
  }

  .icone {
    color: #e91e63;
    font-size: 18px;
    margin-right: 8px;
  }

  @media (max-width: 900px) {
    text-align: left;
  }
`;

const ChartBox = styled.div`
  z-index: 2;
  img {
    max-width: 430px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

export default function Estatisticas() {
  return (
    <Section id="estatisticas">
      <TextContent>
        <h2>Estatísticas</h2>

        <div className="dados">
          <p>
            <span className="icone">🎗️</span>
            <strong>Dados Mundiais</strong>
          </p>
          <ul>
            <li>2,3 milhões de novos casos por ano (OMS, 2023)</li>
            <li>670 mil mortes registradas mundialmente</li>
            <li>Taxa média de sobrevivência em 5 anos: 90%</li>
            <li>Previsão de aumento de 38% até 2050</li>
          </ul>
        </div>

        <div className="impactos">
          <p><strong>Impactos:</strong></p>
          <ul>
            <li>Afeta 1 a cada 8 mulheres ao longo da vida</li>
            <li>Principal causa de morte por câncer em mulheres</li>
            <li>Mais comum entre 40 e 59 anos</li>
          </ul>
        </div>
      </TextContent>

      <ChartBox>
        <img src={graficoImg} alt="Gráfico dos tipos de câncer entre mulheres" />
      </ChartBox>
    </Section>
  );
}
