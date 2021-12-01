import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Cursos: [Curso],
        Login(email: String!, password: String!): String    
    },

    type Mutation{
        agregarCurso(curso: CursoInput): Curso,
        agregarUsuario(usuario: usuarioInput): Usuario
    },

    type Usuario {
        id:ID,
        name: String,
        email: String,
        password: String
    },
    input usuarioInput {
        name: String,
        email: String,
        password: String
      },

    type Curso {
      id: ID,
      name: String,
      lenguages: [Lenguage],
      date: String,
    },

    type Lenguage {
        lenguage: String
    },

    input CursoInput {
      name: String,
      lenguages:[lenguageInput],
      date: String,
    },

    input lenguageInput {
        Lenguage:String
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
