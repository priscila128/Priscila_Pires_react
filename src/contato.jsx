import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fdecef;
  padding: 100px 120px;
  overflow: hidden;
  min-height: 100vh;

  /* meio círculo à esquerda */
  &::before {
    content: "";
    position: absolute;
    left: -250px;
    top: 50%;
    transform: translateY(-50%);
    width: 900px;
    height: 900px;
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
  }
`;

const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 40px;
  width: 360px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 2;

  h2 {
    font-family: "Playfair Display", serif;
    font-size: 26px;
    color: #1a1a1a;
    margin-bottom: 25px;
    text-align: left;

    @media (max-width: 900px) {
      text-align: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input,
  textarea {
    background-color: #fdecef;
    border: none;
    border-radius: 6px;
    padding: 12px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #333;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  button {
    background-color: #d988a3;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    padding: 10px 0;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #c97795;
    }
  }
`;

const InfoContainer = styled.div`
  max-width: 450px;
  z-index: 2;

  h3 {
    font-family: "Playfair Display", serif;
    font-size: 22px;
    color: #8b2c57;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
  }

  @media (max-width: 900px) {
    margin-top: 40px;
  }
`;

export default function Contato() {
  return (
    <Section id="contato">
      <FormContainer>
        <h2>Entre em Contato</h2>
        <form>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensagem" required></textarea>
          <button type="submit">ENVIAR</button>
        </form>
      </FormContainer>

      <InfoContainer>
        <h3>Não tenha medo de investigar</h3>
        <p>
          Quanto mais informações você tiver sobre a sua doença, melhores serão
          as perspectivas de um tratamento assertivo e individualizado.
        </p>
      </InfoContainer>
    </Section>
  );
}
