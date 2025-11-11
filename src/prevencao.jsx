import React from "react";
import styled from "styled-components";
import autoexameImg from "./assets/autoexame.png"; 

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 60px 80px;
  color: #333;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  background-color: #fdecef;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }

  /* bolinhas decorativas grandes */
  &::before {
    content: "";
    position: absolute;
    top: -80px;
    left: -80px;
    width: 250px;
    height: 250px;
    background-color: #f8c3d3;
    border-radius: 50%;
    opacity: 0.5;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 60px;
    right: -100px;
    width: 300px;
    height: 300px;
    background-color: #f6a7bd;
    border-radius: 50%;
    opacity: 0.3;
    z-index: 0;
  }

  /* bolinha extra opcional no meio */
  div.decor {
    position: absolute;
    top: 300px;
    left: 150px;
    width: 150px;
    height: 150px;
    background-color: #f7b9c7;
    border-radius: 50%;
    opacity: 0.25;
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 52px;
  color: #333;
  max-width: 420px;

  @media (max-width: 900px) {
    font-size: 36px;
    text-align: center;
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 550px;
  width: 100%;
  border-radius: 10px;
  object-fit: contain;

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 28px;
  margin-bottom: 20px;
  color: #c54b7b;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    li::before {
      content: "🎀";
      font-size: 14px;
    }
  }
`;

export default function Prevencao() {
  return (
    <Container>
      <div className="decor"></div>

      <Content>
        <HeaderSection>
          <Title>Prevenção e Sintomas</Title>
          <Image src={autoexameImg} alt="Ilustração do autoexame das mamas" />
        </HeaderSection>

        <SectionTitle>Prevenção</SectionTitle>
        <CardGrid>
          <Card>
            <ul>
              <li>Rastreamento Regular (Mamografia)</li>
              <li>Autoexame das Mamas (Autoconhecimento)</li>
            </ul>
          </Card>
          <Card>
            <ul>
              <li>Vacinação (HPV – Câncer de Colo de Útero)</li>
              <li>Acompanhamento Ginecológico Anual</li>
            </ul>
          </Card>
        </CardGrid>

        <SectionTitle>Sintomas</SectionTitle>
        <CardGrid>
          <Card>
            <ul>
              <li>Nódulo ou Caroço</li>
              <li>Alterações no Mamilo</li>
            </ul>
          </Card>
          <Card>
            <ul>
              <li>Dor Persistente no Mamilo</li>
              <li>Secreção e Sangramento Vaginal Anormal</li>
            </ul>
          </Card>
        </CardGrid>
      </Content>
    </Container>
  );
}
