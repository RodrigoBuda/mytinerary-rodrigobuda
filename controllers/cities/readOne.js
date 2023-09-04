import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let oneCity = await City.findOne({ _id: req.params.city_id }).select(
      "country photo smalldescription, city"
    ); //busca segun el objeto de condiciones(en este caso el id pero podria ser nombre, mail, etc)
    //let oneUserId = await User.findById(req.params.id); //busca por id
    return res.status(200).json({
      success: true,
      message: "city found",
      response: oneCity,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
