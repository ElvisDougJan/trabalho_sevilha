"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PessoaFisicaController = require("./../controllers/PessoaFisicaController");
const PessoaFisicaFunctions = require("./../controllers/PessoaFisicaFuncions");
const router = express_1.Router();
router.post('/cria', (req, res) => {
    PessoaFisicaController.criaPessoaFisica(req, res);
});
router.get('/consulta', (req, res) => {
    PessoaFisicaController.consultaPF(req, res);
});
router.get('/nome', (req, res) => {
    PessoaFisicaController.consultaNomePF(req, res);
});
router.post('/numero', (req, res) => {
    PessoaFisicaController.consultaNumeroPF(req, res);
});
router.post('/cpf', (req, res) => {
    PessoaFisicaController.consultaCpfPF(req, res);
});
router.put('/altera-nome', (req, res) => {
    PessoaFisicaController.alteraNome(req, res);
});
router.put('/altera-numero', (req, res) => {
    PessoaFisicaController.alteraNumero(req, res);
});
router.post('/informa-idade', (req, res) => {
    PessoaFisicaFunctions.informaIdadePessoa(req, res);
});
router.post('/informa-salario', (req, res) => {
    PessoaFisicaFunctions.informaSalario(req, res);
});
router.post('/calcula-inss', (req, res) => {
    PessoaFisicaFunctions.calculaINSS(req, res);
});
router.post('/encontra-pf', (req, res) => {
    PessoaFisicaFunctions.consultaPessoasRepetidas(req, res);
});
router.post('/verifica-qtd', (req, res) => {
    PessoaFisicaFunctions.consultaQtdPessoasRepetidas(req, res);
});
exports.default = router;
