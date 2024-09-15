// models/supplier.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Supplier = sequelize.define('Supplier', {
    SupplierID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    SupplierName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ContactName: DataTypes.STRING,
    Address: DataTypes.TEXT,
    Phone: DataTypes.STRING
}, {
    timestamps: false
});

module.exports = Supplier;
