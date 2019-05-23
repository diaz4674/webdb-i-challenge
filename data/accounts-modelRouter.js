const express = require('express');

const accounts = require('./accounts-model.js');
const router = express.Router();

//GET
router.get('/', (req, res) => {
    accounts.find()
        .then( accounts => {
            res.status(200).json(accounts)
        })
        .catch( err => {
            res.status(500).json({ error:{message: "Could not retrieve accounts"}})
        })
})

//GET by ID
router.get('/:id', (req, res) => {
    const {id} = req.params;
    accounts.find(id)
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json({error:{message: "Could not retrieve account"}})
        })
})

//POST 
router.post('/', (req, res) => {
    const newAccount = req.body;

    accounts.add(newAccount)
        .then(addedAccount => {
            res.status(200).json(addedAccount)
        })
        .catch(err => {
            res.status(500).json({error:{message: "Could not add account"}})
        })
})

//DELETE
router.delete('/:id', (req, res) => {
    const {id} = req.params

    accounts.remove(id)
        .then( removedAccount => {
        res.status(200).json(removedAccount)
        })
        .catch(err => {
            res.status(500).json({error:{message: "Could not delete account"}})
       
        })
})


module.exports = router;