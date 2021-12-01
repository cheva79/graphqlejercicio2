// import { cursos } from "../data/cursos";
import Curso from "../model/Curso";
import Usuario from "../model/Usuario";
import bcryp from "bcrypt";
import { generarJwt } from "../helpers/jwt";


export const resolvers = {
  Query: {
    Cursos(__, args, context) {
        console.log("Este es el context: ",context);
        if(context.user.auth){
            return Curso.find();
        }
        else{
            return null;
        }
    },
    Usuarios(__, args, context) {
      console.log("Este es el context: ",context);
      if(context.user.auth){
          return Usuario.find();
      }
      else{
          return null;
      }
  },
  //   Cursos() {
  //     return Curso.find();
  // },
      //Importacion de data/curso
      // return Curso.find();
    async Login(__, { email, password }) {
      const usuario = await Usuario.findOne({ 
          email 
        });
        console.log(usuario)
        console.log("args: ", email, password )
        
      if (!usuario) {
        return "Usuario o Contraseña incorrecta";
      }
      const validarPassword = bcryp.compareSync(password, usuario.password);
      if (validarPassword) {
        const token = await generarJwt(usuario.id, usuario.name)
        console.log("El token es: ",token)
        return token;
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
