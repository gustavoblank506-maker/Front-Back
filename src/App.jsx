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

      <br />

      <label>
        Idade:
        <input
          type="number"
          name="idade"
          value={formValores.idade}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        CPF:
        <input
          type="text"
          name="cpf"
          value={formValores.cpf}
          onChange={handleChange}
        />
      </label>

      <br />

      <button type="submit">Cadastrar</button>
    </form>
  </>
);