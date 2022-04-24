const connecDb = require('./db/connect')
const { Router } = require('express')
const express = require('express')
app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
const start = async ()=>{
try {
    await connecDb(String(process.env.MONGO))
    app.listen(5000,_=> console.log("Server Connected to DB"))
} catch (error) {
    console.log(error);
}
}
start()

