class Pessoa {
    #cpf;
    #anoNascimento;

    constructor(nome, idade, cpf, anoNascimento) {
        this.nome = nome;
        this.idade = idade;

        this.#cpf = cpf;
        this.#anoNascimento = anoNascimento;
    }

    #validarCpf() {
        return this.#cpf.length === 11;
    }

    #calcularIdadeAtual(anoAtual) {
        return anoAtual - Number(this.#anoNascimento);
    }

    mostrarInformacoes() {
        console.log("---- Pessoa ----");
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`CPF válido: ${this.#validarCpf()}`);
        console.log(`Idade calculada: ${this.#calcularIdadeAtual(2026)}`);
    }
}

export default Pessoa;