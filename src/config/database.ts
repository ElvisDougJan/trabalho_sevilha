import * as mongoose from 'mongoose'
let db

if (!db) {
  db = mongoose.connect('mongodb://elvis:123abc@ds033196.mlab.com:33196/trabalho_sevilha')
}

export default db