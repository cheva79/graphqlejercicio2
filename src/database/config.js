import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:PH5Kjj@cluster0.pequx.mongodb.net/test');
        console.log('DB Online');
    }
    catch (error) {

        console.log("error  al conectarse a la DB");
    }
}
export default dbConnection;
// module.exports = {dbConnection};