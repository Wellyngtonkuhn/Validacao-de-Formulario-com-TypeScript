import { useState } from "react";

import styled from "styled-components";

export default function Form() {
  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [senha2, setSenha2] = useState<string>();

  const handleEnviar = (e: any) => {
    e.preventDefault();

    if (email && senha === senha2) {
      alert("Bem vindo");

      localStorage.setItem("user", email);
      setEmail("");
      setSenha("");
      setSenha2("");
    } else {
      alert("Senhas não se igualam!");
    }
  };

  return (
    <>
      <FormType onSubmit={handleEnviar}>
        <label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <Input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <label>
          Repita a Senha:
          <Input
            type="password"
            value={senha2}
            onChange={(e) => setSenha2(e.target.value)}
          />
        </label>
        <Button type="submit">Enviar</Button>
      </FormType>
    </>
  );
}

const FormType = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 15px;
  border: unset;
  margin-left: 0.3rem;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 2rem;
  border-radius: 15px;
  border: unset;
  font-size: 1rem;
`;
