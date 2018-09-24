import { Pessoa } from "../Interfaces/Pessoa";

export default class PessoaJuridica implements Pessoa {
  private nome: string;
  private numero: string;
  private endereco: string;
  private cnpj: string;

  constructor(nome, numero, endereco, cnpj) {
    this.nome = nome
    this.numero = numero
    this.endereco = endereco
    this.cnpj = cnpj
  }

  getNome(): string {
    return this.nome
  }

  getNumero(): string {
    return this.numero
  }

  getEndereco(): string {
    return this.endereco
  }

  getCPNJ(): string {
    return this.cnpj
  }
}