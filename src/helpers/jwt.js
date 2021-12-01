import jwt from "jsonwebtoken"

const secret = "mi_llave"

export const generarJwt = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid,
            name
        }
        jwt.sign(payload, secret, {expiresIn: "2h"},
            (err, token) => {
                if(err){
                    console.log(err),
                    reject("No se pudo generar el token")
                }
                resolve(token)
            })        
    })
}
