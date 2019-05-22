const express = require('express');

const server = express();

const accountsRouter = require('./data/accounts-modelRouter')
// your code here

server.use(express.json())

//Routes
server.use('/api/accountsModel', accountsRouter)

server.get('/', (req, res) =>{
    res.send('Welcome to the accounts!')
})

module.exports = server;