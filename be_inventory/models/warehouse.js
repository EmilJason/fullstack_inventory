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

const getAllWarehouses = async () => {
    try {
        const [rows] = await mysql.query('CALL getAllWarehouses()');
        if(rows.length > 0){
            return rows[0];
        }
    } catch (error) {
        console.error('Error executing query in warehouse model:', error);
    }

}

const addNewWarehouse = async (values) => {
    try {
        const [data] = mysql.query('CALL addNewWarehouse(?, ?)',[values.warehouseName, values.warehouseLocation]);
        return data;
    } catch (error) {
        
    }
}

const editWarehouse = async (id,name,location) =>{
    try {
        const [data] = await mysql.query('CALL editWarehouse(?, ?, ?)',[id, name, location]);
        return data;
    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    getAllWarehouses,
    addNewWarehouse,
    editWarehouse
}