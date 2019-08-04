import React, { useState, useEffect, useRef } from 'react';
import Logo from "../../components/Logo";
import { Wrapper, Form, Input, Button, SeparateForm, Anchor } from './style';

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [labelButton, setLabelButton] = useState("Entrar");
  const [labelLink, setLabelLink] = useState("Cadastre-se");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (signup) {
      setLabelButton("Cadastrar");
      setLabelLink("Login");
      setPass("");
      setConfirmPass("");
      firstFieldRef.current.focus();
    } else {
      setLabelButton("Entrar");
      setLabelLink("Cadastre-se");
      setPass("");
      setConfirmPass("");
    }
  }, [signup]);

  return (
    <Wrapper>
      <Logo light />

      <Form>
        <Input type="email" placeholder="Seu e-mail" ref={firstFieldRef} value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={pass} onChange={e => setPass(e.target.value)} />
        {signup && <Input type="password" placeholder="Confirmar senha" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} />}
        <Button light type="submit" onClick={(e) => e.preventDefault()}>{labelButton}</Button>
        <SeparateForm>ou</SeparateForm>
        <Anchor href="#" onClick={() => setSignup(!signup)}>{labelLink}</Anchor>
      </Form>
    </Wrapper>
  );
}

export default Login;
