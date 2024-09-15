const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplier');
const sequelize = require('sequelize')
// Get all suppliers
router.get('/', async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single supplier by ID
router.get('/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (supplier) {
            res.json(supplier);
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new supplier
router.post('/', async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a supplier
router.put('/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (supplier) {
            await supplier.update(req.body);
            res.json(supplier);
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a supplier
router.delete('/:id', async (req, res) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (supplier) {
            await supplier.destroy();
            res.json({ message: 'Supplier deleted' });
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
