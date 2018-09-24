import { Pessoa } from "../Interfaces/Pessoa"

export default class PessoaFisica implements Pessoa {
  private nome: string
  private numero: string
  private endereco: string
  private cpf: string

  getNome(): string {
    return this.nome
  }

  getNumero(): string {
    return this.numero
  }

  getEndereco(): string {
    return this.endereco
  }

  getCpf(): string {
    return this.cpf
  }

  setNome(nome: string): void {
    this.nome = nome
  }

  setNumero(numero: string): void {
    this.numero = numero
  }

  setEndereco(endereco: string): void {
    this.endereco = endereco
  }

  setCpf(cpf: string): void {
    this.cpf = cpf
  }
}