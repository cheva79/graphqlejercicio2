import jwt from "jsonwebtoken";

const secret = "mi_llave";
export const validarJwt = (req, res, next) => {
  let token = "";
  token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    req.user = { auth: false };
    return next();
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  try {
    const { uid, nombre } = jwt.verify(token, secret);
    console.log("El token es: ", token);
    console.log(uid, nombre);
    req.user = { auth: true };
    return next();
  } catch (error) {
    req.user = { auth: false };
    return next();
  }
};
