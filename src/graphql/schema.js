import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        hola(nombre: String!): String,
        Cursos: [Curso]    
    },

    type Mutation{
        agregarCurso(input: CursoInput):Curso
    },

    type Curso {
        id: ID,
      name: String,
      lenguage: String,
      date: String,
    },

    input CursoInput {
        id: ID,
      name: String,
      lenguage: String,
      date: String,
    }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
