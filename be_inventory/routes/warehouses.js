const express = require('express');
const router = express.Router();
const warehouse = require('../models/warehouse');

router.get('/', async (req, res)=>{
    try {
        const  warehouses = await warehouse.getAllWarehouses();
        res.json(warehouses)
    } catch (error) {
        
    }
})
router.post('/', async(req, res) =>{
    try {
        const newWarehouse = await warehouse.addNewWarehouse(req.body);
        res.json({message: 'New warehouse added successfully', values: req.body})
    } catch (error) {
        console.log(error.message)
    }
})

router.put('/edit/:id', async (req, res)=>{
    try{
        const editWarehouseValues = warehouse.editWarehouse(req.params.id, req.body.warehouseName, req.body.warehouseLocation);
        res.json({message: 'Warehouse updated successfully', values: req.body, warehouseID: req.params.id})
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;