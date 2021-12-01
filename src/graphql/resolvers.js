// import { cursos } from "../data/cursos";
import Curso from "../model/Curso";
import Usuario from "../model/Usuario";
import bcryp from "bcrypt";

export const resolvers = {
  Query: {
    Cursos() {
      //Importacion de data/curso
      return Curso.find();
    },
    async Login(__, { email, password }) {
        
      const usuario = await Usuario.findOne({ 
          email 
        });
      if (!usuario) {
        return "Usuario o Contraseña incorrecta";
      }
      const validarPassword = bcryp.compareSync(password, usuario.password);
      if (validarPassword) {
        return "Exitoso";
      } else {
        return "Usuario o Contraseña incorrecta";
      }
    }
  },

  Mutation: {
    async agregarCurso(_, { curso }) {
      // const nCurso = new Curso({
      //     name: curso.name,
      //     lenguage: curso.lenguage,
      //     date: curso.date
      // })
      const nCurso = new Curso(curso);

      return await nCurso.save();
    },
    async agregarUsuario(__, { usuario }) {
      const salt = bcryp.genSaltSync();
      let nUsuario = new Usuario(usuario);
      nUsuario.password = bcryp.hashSync(usuario.password, salt);
      return await nUsuario.save();
    },
  },
};
