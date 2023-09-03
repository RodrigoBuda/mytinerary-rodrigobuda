import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    console.log(req.query); //query es un objeto con todas las consultas/igualdades a buscar en la base de datos
    //let objetoDeBusqueda = { admin_id: '64db6cb0ddc3cfe962708084'} //para el ejemplo es igual a req.query
    let objetoDeBusqueda = {};
    let objetoDeOrdenamiento = {};
    if (req.query.admin_id) {
      objetoDeBusqueda.admin_id = req.query.admin_id;
    }

    if (req.query.city) {
      objetoDeBusqueda.city = new RegExp(req.query.city, "i");
    }
    if (req.query.sort) {
      objetoDeOrdenamiento.city = req.query.sort;
      //agrego la propiedad por la cual quiero ORDENAR
      //si es 1 ordena ascendentemente
      //si es -1 ordena descendentemente
    }
    let allCities = await City.find(
      objetoDeBusqueda,
      "country city photo smalldescription admin_id"
    )
      .populate("admin_id", "name")
      .sort(objetoDeOrdenamiento);
    //let allCities = await City.find().select("country city photo smalldescription admin_id").populate("admin_id", "name");

    //find BUSCA todos (en este caso, cities)
    return res.status(200).json({
      success: true,
      message: "cities found",
      response: allCities,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
