"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let db;
if (!db) {
    db = mongoose.connect('mongodb://elvis:123abc@ds033196.mlab.com:33196/trabalho_sevilha');
}
exports.default = db;
