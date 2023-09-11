import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    let token = jwt.sign(
                                      //elmetodo sign depende dr 3 parametros:
      { mail: req.user.mail },        //objeto a convertir en token. Lo sacamos de la propiedad req.user que agregamos en notExistUser con todos los datos del usuario
      process.env.SECRET_KEY,         //palabra que sirve de "llave para tokenizar"
      { expiresIn: 60 * 60 * 24 * 7 } //expiracion en segundos
    );
    req.token = token;
    //console.log(req.token)
    return next();
  } catch (error) {
    return next(error);
  }
};
