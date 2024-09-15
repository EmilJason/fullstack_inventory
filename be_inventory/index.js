const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./config');
require('dotenv').config();

const app = express();
app.use(express.json({bodyParser: true}));
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    port: config.db.port,
});

sequelize.authenticate()
    .then(() => console.log('MySQL connected'))
    .catch(err => console.log('Error: ' + err));

// Import routes
const categoryRoutes = require('./routes/categories');
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');
const productRoutes = require('./routes/products');
const supplierRoutes = require('./routes/suppliers');
const transactionRoutes = require('./routes/transactions');
const warehouseRoutes = require('./routes/warehouses');
const stockLevelRoutes = require('./routes/stockLevels');

// Use routes
app.get('/', (req, res) => {
    res.send('Welcome to the Inventory Management System');
});
// app.use('/categories', categoryRoutes);
// app.use('/customers', customerRoutes);
// app.use('/orders', orderRoutes);
// app.use('/products', productRoutes);
// app.use('/suppliers', supplierRoutes);
// app.use('/transactions', transactionRoutes);
// app.use('/warehouses', warehouseRoutes);
// app.use('/stockLevels', stockLevelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
