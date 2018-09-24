import { Router, Request, Response } from 'express'
import * as PessoaFisicaController from './../controllers/PessoaFisicaController'
import * as PessoaFisicaFunctions from './../controllers/PessoaFisicaFuncions'

const router = Router()

router.post('/cria', (req: Request, res: Response) => {
  PessoaFisicaController.criaPessoaFisica(req, res)
})

router.get('/consulta', (req: Request, res: Response) => {
  PessoaFisicaController.consultaPF(req, res)
})

router.get('/nome', (req: Request, res: Response) => {
  PessoaFisicaController.consultaNomePF(req, res)
})

router.get('/numero', (req: Request, res: Response) => {
  PessoaFisicaController.consultaNumeroPF(req, res)
})

router.get('/cpf', (req: Request, res: Response) => {
  PessoaFisicaController.consultaCpfPF(req, res)
})

router.put('/altera-nome', (req: Request, res: Response) => {
  PessoaFisicaController.alteraNome(req, res)
})

router.put('/altera-numero', (req: Request, res: Response) => {
  PessoaFisicaController.alteraNumero(req, res)
})

router.post('/informa-idade', (req: Request, res: Response) => {
  PessoaFisicaFunctions.informaIdadePessoa(req, res)
})

router.post('/informa-salario', (req: Request, res: Response) => {
  PessoaFisicaFunctions.informaSalario(req, res)
})

router.post('/calcula-inss', (req: Request, res: Response) => {
  PessoaFisicaFunctions.calculaINSS(req, res)
})

router.post('/encontra-pf', (req: Request, res: Response) => {
  PessoaFisicaFunctions.consultaPessoasRepetidas(req, res)
})

router.post('/verifica-qtd', (req: Request, res: Response) => {
  PessoaFisicaFunctions.consultaQtdPessoasRepetidas(req, res)
})

export default router