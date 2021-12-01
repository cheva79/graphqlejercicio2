import mongoose from "mongoose";

const dotenv = require('dotenv').config();

const dbConnection = async () => {
    try {
<<<<<<< HEAD
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pequx.mongodb.net/test`);
        console.log('DB Online'); 
=======
        await mongoose.connect('mongodb+srv://admin:*****@cluster0.pequx.mongodb.net/test');
        console.log('DB Online');
>>>>>>> 9ebc78caa01236025a8e2ce8f00eea8bb970f3eb
    }
    catch (error) {

        console.log("error  al conectarse a la DB");
    }
}
export default dbConnection;
// module.exports = {dbConnection};
