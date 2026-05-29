import { useState } from 'react';
import './index.css';

function App() {

  const [formValores, setFormValores] = useState({
    nome: '',
    idade: '',
    cpf: '',
    anoNascimento:''
  });

  const handleChange = (e) => {
    setFormValores({
      ...formValores,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Dados a serem enviados:", formValores);

      const response = await fetch('http://localhost:3000/cadastrarPessoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });

      const json = await response.json();

      console.log(response);
      console.log(json);

      alert(json.mensagem);

    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  return (
    <>
      <h1>Cadastro de Pessoa</h1>

      <form onSubmit={handleSubmit}>

        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formValores.nome}
            onChange={handleChange}
          />
        </label>

        <label>
          Idade:
          <input
            type="number"
            name="idade"
            value={formValores.idade}
            onChange={handleChange}
          />
        </label>

        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={formValores.cpf}
            onChange={handleChange}
          />
        </label>

        <button type="submit">
          Cadastrar
        </button>

      </form>
    </>
  );
}

export default App;