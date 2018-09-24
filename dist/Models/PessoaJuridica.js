"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PessoaJuridica {
    constructor(nome, numero, endereco, cnpj) {
        this.nome = nome;
        this.numero = numero;
        this.endereco = endereco;
        this.cnpj = cnpj;
    }
    getNome() {
        return this.nome;
    }
    getNumero() {
        return this.numero;
    }
    getEndereco() {
        return this.endereco;
    }
    getCPNJ() {
        return this.cnpj;
    }
}
exports.default = PessoaJuridica;
