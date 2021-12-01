import mongoose from "mongoose";

const dotenv = require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pequx.mongodb.net/test`);
        console.log('DB Online'); 
    }
    catch (error) {

        console.log("error  al conectarse a la DB");
    }
}
export default dbConnection;
// module.exports = {dbConnection};