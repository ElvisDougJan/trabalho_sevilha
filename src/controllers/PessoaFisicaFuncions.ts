import { pessoaFisicaModel, listaPessoasFisicas } from './PessoaFisicaController'

const insereIdade = idade => idade

export const informaIdadePessoa = (req, res) => res.json(`${pessoaFisicaModel.getNome()} tem ${insereIdade(req.body.idade)} anos.`)

const salario = salario => salario

export const informaSalario = (req, res) => res.json(`${pessoaFisicaModel.getNome()} ganha R$${salario(req.body.salario)}.`)

const descontaINSS = (INSS, salario) => salario - (salario * INSS)

export const calculaINSS = (req, res) => {
  req.body.salario <= 1693
    ? res.json(`${pessoaFisicaModel.getNome()} tem um salário bruto de R$${req.body.salario}, tendo um desconto de 0,08% do INSS, recebendo no total de R$${descontaINSS(0.08, req.body.salario)}`)
    : null
  req.body.salario > 1694 && req.body.salario <= 2822
    ? res.json(`${pessoaFisicaModel.getNome()} tem um salário bruto de R$${req.body.salario}, tendo um desconto de 0,09% do INSS, recebendo no total de R$${descontaINSS(0.09, req.body.salario)}`)
    : null
  req.body.salario > 2822 && req.body.salario <= 5645
    ? res.json(`${pessoaFisicaModel.getNome()} tem um salário bruto de R$${req.body.salario}, tendo um desconto de 0,11% do INSS, recebendo no total de R$${descontaINSS(0.11, req.body.salario)}`)
    : null
}

const verificaNomeRepetido = nome => listaPessoasFisicas.filter(pessoa => pessoa.nome === nome ? pessoa : null)

export const consultaPessoasRepetidas = (req, res) => res.send(verificaNomeRepetido(req.body.nome))

export const consultaQtdPessoasRepetidas = (req, res) => {
  res.send(`Existem ${verificaNomeRepetido(req.body.nome).length} com o nome ${req.body.nome}`)
}