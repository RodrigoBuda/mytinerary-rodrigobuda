import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let updatedCity = await City.findByIdAndUpdate(
      req.params.u_id,
      req.body,
      { new: true }
      //por default esta en false. devuelve el objeto ANTES de la modificacion
      //si lo cambio a true, devuelve el objeto luego de la modificacion
    ).select("country photo smalldescription");
    return res.status(200).json({
      success: true,
      message: "city updated",
      response: updatedCity,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
