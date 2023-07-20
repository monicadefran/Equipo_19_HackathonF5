import mongoose from 'mongoose'
const url = 'mongodb+srv://sala19:sala19@hackaton19.egcll73.mongodb.net/codexchange?retryWrites=true&w=majority';
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db