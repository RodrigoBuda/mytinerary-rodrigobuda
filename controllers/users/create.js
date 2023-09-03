import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    //req es el objeto donde el cliente me manda MUCHOS datos importantes acerca de la peticion
    //las propiedades de req mas importantes son:
    //BODY: objeto que generalmente se envia a traves de formularios
    //PARAMS (parametros): suelen ser estaticos como el id de una ciudad a buscar
    //QUERIS (consultas): son opcionales y nos indican algunas connsultas/filtros/modos de ver la info de la pag, etc
    let newUser = await User.create(req.body);
    return res.status(201).json({
      success: true,
      message: "user created",
      response: newUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
