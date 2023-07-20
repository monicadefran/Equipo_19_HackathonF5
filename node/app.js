import express  from "express"
import cors from 'cors'
import db from "./database/db.js"

import coderRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/coders', coderRoutes )

app.listen(8000, ()=>{
    console.log('Server UP running in mongodb+srv://sala19:sala19@hackaton19.egcll73.mongodb.net/codexchange.codermodels')
})