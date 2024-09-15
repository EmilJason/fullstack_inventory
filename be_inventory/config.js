require('dotenv').config();
module.exports = {
    db: {
        host: process.env.HOST || 'localhost',
        user: process.env.USER || 'root',
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME || 'be_inventory',
        port: process.env.DATABASE_PORT,
    }
};
