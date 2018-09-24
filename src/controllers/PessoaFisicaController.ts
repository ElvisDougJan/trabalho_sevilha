import PessoaFisica from "../Models/PessoaFisica";

let pessoaFisica = new PessoaFisica()
let listaPessoaFisica = []

export function criaPessoaFisica(req, res): void {

  pessoaFisica.setNome(req.body.nome)
  pessoaFisica.setNumero(req.body.numero)
  pessoaFisica.setEndereco(req.body.endereco)
  pessoaFisica.setCpf(req.body.cpf)

  res.status(200).json('Pessoa Fisica criada com sucesso!')

  listaPessoaFisica.push(pessoaFisica)

  pessoaFisica = new PessoaFisica()
}

export function consultaPF(req, res) {
  res.json(listaPessoaFisica)
}

export function consultaNomePF(req, res) {
  res.json(`O nome é: ${pessoaFisica.getNome()}`)
}

export function consultaNumeroPF(req, res) {
  res.json(`O número de ${pessoaFisica.getNome()} é: ${pessoaFisica.getNumero()}`)
}

export function consultaEnderecoPF(req, res) {
  res.json(`O endereço de  ${pessoaFisica.getNome()} é: ${pessoaFisica.getEndereco()}`)
}

export function consultaCpfPF(req, res) {
  res.json(`O CPF de ${pessoaFisica.getNome()} é ${pessoaFisica.getCpf()}`)
}

export function alteraNome(req, res) {
  let nomeOriginal = pessoaFisica.getNome()
  pessoaFisica.setNome(req.body.nome)
  res.status(200).json(`O nome ${nomeOriginal} foi alterado para ${pessoaFisica.getNome()}`)
}

export function alteraNumero(req, res) {
  let numeroOriginal = pessoaFisica.getNumero()
  pessoaFisica.setNumero(req.body.numero)
  res.status(200).json(`O número original de ${pessoaFisica.getNome()} era ${numeroOriginal} e mudou para ${pessoaFisica.getNumero()}`)
}

export const pessoaFisicaModel = pessoaFisica
export const listaPessoasFisicas = listaPessoaFisica