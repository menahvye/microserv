const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes/user.js');


const app = express()
const port = process.env.port || 3000
const mongoUrl = process.env.db_url
const database = process.env.db_database


mongoose.connect(`mongodb://${mongoUrl}/${database}?directConnection=true`).then(() => console.log('Database working...')).catch(err => console.log(`erreur : ${err}`))

app.use(express.json());

app.use('/', router)

app.listen(port, () => {
    console.log(`Server start on : http://localhost:${port}`)
})