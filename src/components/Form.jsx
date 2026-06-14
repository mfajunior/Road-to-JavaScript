import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    alert("Usuário cadastrado com sucesso!");
    console.log("Nome: " + name);
    console.log("Senha: " + password);
  }
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Formulário de Contato</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}
export default Form;
