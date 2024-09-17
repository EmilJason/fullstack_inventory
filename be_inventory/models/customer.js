const sequelize = require('sequelize')
const config = require('../config/config');
const mysql2 = require('mysql2')

const mysql= mysql2.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 10
}).promise();

const getAllCustomers = async () => {
    try {
        const [rows] = await mysql.query('CALL getAllWarehouses()');
        if(rows.length > 0){
            return rows[0];
        }
    } catch (error) {
        console.error('Error executing query in warehouse model:', error);
    }

}

const addNewCustomer = async (values) => {
    try {
        const [data] = mysql.query('CALL addNewCustomer(?, ?, ?, ?)',[values.customerName, values.contactName, values.address, values.phone]);
        return data;
    } catch (error) {
        
    }
}

const editCustomer = async (id, name, contactname, address, phone) =>{
    try {
        const [data] = await mysql.query('CALL editWarehouse(?, ?, ?)',[id, name, contactname, address, phone]);
        return data;
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    getAllCustomers,
    addNewCustomer,
    editCustomer
}