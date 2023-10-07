import dotenv from 'dotenv'


dotenv.config()

export default {
    host: process.env.HOST,
    dataBase: process.env.DATABASE,
    userName: process.env.DB_USERNAME,
    pass: process.env.PASS,
    port: process.env.PORT,
    dialect: process.env.DIALECT
}