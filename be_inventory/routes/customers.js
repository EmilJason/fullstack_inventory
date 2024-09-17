const express = require('express');
const router = express.Router();
const customer = require('../models/customer');

router.get('/', async (req, res)=>{
    try {
        const  customers = await customer.getAllCustomers();
        res.json(customers)
    } catch (error) {
        
    }
})
router.post('/', async(req, res) =>{
    try {
        const newCustomer = await customer.addNewCustomer(req.body);
        res.json({message: 'New Customer added successfully', values: req.body})
    } catch (error) {
        console.log(error.message)
    }
})

router.put('/edit/:id', async (req, res)=>{
    try{
        const editCustomer = customer.editCustomer(req.params.id, req.body.CustomerName, req.body.CustomerContactName, req.body.CustomerAddress, req.body.Phone);
        res.json({message: 'Customer updated successfully', values: req.body, warehouseID: req.params.id})
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;