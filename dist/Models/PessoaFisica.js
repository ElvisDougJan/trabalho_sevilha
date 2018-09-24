"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PessoaFisica {
    getNome() {
        return this.nome;
    }
    getNumero() {
        return this.numero;
    }
    getEndereco() {
        return this.endereco;
    }
    getCpf() {
        return this.cpf;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
}
exports.default = PessoaFisica;
