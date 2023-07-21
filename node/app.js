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
    console.log('http://localhost:8000/')
})