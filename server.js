import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express()
const port = process.env.port || 3000
const mongoUrl = process.env.db_url
const database = process.env.db_database


mongoose.connect(`mongodb://${mongoUrl}/${database}?directConnection=true`).then(() => console.log('Database working...')).catch(err => console.log(`erreur : ${err}`))

let db


app.get('/', (req, res) => {
    res.send('url / ; ok')
})

app.listen(port, () => {
    console.log(`Server start on : http://localhost:${port}`)
})