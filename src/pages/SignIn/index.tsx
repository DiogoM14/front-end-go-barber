import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Password Obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password,
      });

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);

        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, [signIn]);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Go Barber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />
          <Button type="submit">Entrar</Button>

          <a href="">Esqueci-me da password</a>
        </Form>

        <a href="">
          <FiLogIn />
          Criar conta</a>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
