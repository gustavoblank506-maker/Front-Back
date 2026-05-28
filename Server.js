import express from 'express';
import cors from 'cors';
import Pessoa from './src/Pessoa.js';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/cadastrarPessoa', (req, res) => {

    const { nome, idade, cpf, anoNascimento } = req.body;

    const novaPessoa = new Pessoa(
        nome,
        idade,
        cpf,
        anoNascimento
    );

    novaPessoa.mostrarInformacoes();

    res.status(201).json({

        mensagem: 'Pessoa cadastrada com sucesso',

        pessoa: {
            nome: novaPessoa.nome,
            idade: novaPessoa.idade
        }
    });

});

app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');

});