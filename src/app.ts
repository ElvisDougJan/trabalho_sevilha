import * as express from 'express'
import * as bodyParser from 'body-parser'
import indexRoute from './routes/index'
import PessoaFisicaRoute from './routes/pessoaFisica'

const app = express()
app.use(bodyParser.json())

app.use(indexRoute)
app.use('/pessoa-fisica', PessoaFisicaRoute)

export default app