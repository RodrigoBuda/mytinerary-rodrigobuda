import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let queries = {}
        if (req.query.city_id) {
            //si existe esta consulta
            //llename el objeto de consultas para hacer el filtro
            queries.city_id = req.query.city_id
            //al objeto de filtro
            //le agrego la propiedad de busqueda
            //y le asigno el valor que me envia el cliente en la quey
        }
    let allItineraries = await Itinerary.find(queries, '-__v -createdAt -updatedAt').populate({
      path: "city_id",
      select: "city photo admin_id",
      populate: {
          path: "admin_id",
          select: "name"
      }
  })
    return res.status(200).json({
      success: true,
      message: "Itenaries found!",
      response: allItineraries
    })
  } catch (error) {
    next(error)
  }
}