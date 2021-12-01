import express from "express";
import dotenv from 'dotenv';
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import dbConnection from "./database/config";
import { validarJwt } from "./middleware/validar-jwt";

dotenv.config();

const app = express();

dbConnection(); 

app.use(validarJwt);

app.use("/graphql", graphqlHTTP((req) => ({
    graphiql : true,
    schema : schema,
    context : {
        user : req.user
    } 
})));

app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado al puerto ${process.env.PORT}`);
});



