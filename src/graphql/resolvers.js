import { cursos } from "../data/cursos"

export const resolvers = {
    Query: {
        hola: (parent,args) => {
            return "Hola " + args.nombre
        },
        Cursos() {
            //Importacion de data/curso
            return cursos
        }
    },

    Mutation : {
        agregarCurso(_,{input}){
            return input
        }
    },
}