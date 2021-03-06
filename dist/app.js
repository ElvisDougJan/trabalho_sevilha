"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const index_1 = require("./routes/index");
const pessoaFisica_1 = require("./routes/pessoaFisica");
const app = express();
app.use(bodyParser.json());
app.use(index_1.default);
app.use('/pessoa-fisica', pessoaFisica_1.default);
exports.default = app;
