import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

const SingIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Go Barber" />

        <form>
          <h1>Faça login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />
          <Button type="submit">Entrar</Button>

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
