"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PessoaFisica_1 = require("../Models/PessoaFisica");
let pessoaFisica = new PessoaFisica_1.default();
let listaPessoaFisica = [];
function criaPessoaFisica(req, res) {
    pessoaFisica.setNome(req.body.nome);
    pessoaFisica.setNumero(req.body.numero);
    pessoaFisica.setEndereco(req.body.endereco);
    pessoaFisica.setCpf(req.body.cpf);
    res.status(200).json('Pessoa Fisica criada com sucesso!');
    listaPessoaFisica.push(pessoaFisica);
    pessoaFisica = new PessoaFisica_1.default();
}
exports.criaPessoaFisica = criaPessoaFisica;
function consultaPF(req, res) {
    res.json(listaPessoaFisica);
}
exports.consultaPF = consultaPF;
function consultaNomePF(req, res) {
    listaPessoaFisica.forEach(pessoa => pessoa.nome === req.body.nome
        ? res.json(`O nome é ${pessoa.nome}`)
        : res.status(404).json('Usuário não encontrado'));
}
exports.consultaNomePF = consultaNomePF;
function consultaNumeroPF(req, res) {
    listaPessoaFisica.forEach(pessoa => pessoa.nome === req.body.nome
        ? res.json(`O número de ${pessoa.nome} é: ${pessoa.numero}`)
        : res.status(404).json('Usuário não encontrado'));
}
exports.consultaNumeroPF = consultaNumeroPF;
function consultaEnderecoPF(req, res) {
    listaPessoaFisica.forEach(pessoa => pessoa.nome === req.body.nome
        ? res.json(`O endereço de ${pessoa.nome} é: ${pessoa.endereco}`)
        : res.status(404).json('Usuário não encontrado'));
    res.json(`O endereço de  ${pessoaFisica.getNome()} é: ${pessoaFisica.getEndereco()}`);
}
exports.consultaEnderecoPF = consultaEnderecoPF;
function consultaCpfPF(req, res) {
    listaPessoaFisica.forEach(pessoa => pessoa.nome === req.body.nome
        ? res.json(`O CPF de ${pessoa.nome} é: ${pessoa.cpf}`)
        : res.status(404).json('Usuário não encontrado'));
}
exports.consultaCpfPF = consultaCpfPF;
function alteraNome(req, res) {
    let nomeOriginal = pessoaFisica.getNome();
    pessoaFisica.setNome(req.body.nome);
    res.status(200).json(`O nome ${nomeOriginal} foi alterado para ${pessoaFisica.getNome()}`);
}
exports.alteraNome = alteraNome;
function alteraNumero(req, res) {
    let numeroOriginal = pessoaFisica.getNumero();
    pessoaFisica.setNumero(req.body.numero);
    res.status(200).json(`O número original de ${pessoaFisica.getNome()} era ${numeroOriginal} e mudou para ${pessoaFisica.getNumero()}`);
}
exports.alteraNumero = alteraNumero;
exports.pessoaFisicaModel = pessoaFisica;
exports.listaPessoasFisicas = listaPessoaFisica;
