import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SingIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Go Barber" />

        <form>
          <h1>Faça login</h1>

          <input placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">Entrar</button>

          <a href="">Esqueci-me da password</a>
        </form>

        <a href="">
          <FiLogIn />
          Criar conta</a>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
