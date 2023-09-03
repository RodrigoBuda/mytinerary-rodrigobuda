import User from "../../models/User.js";

export default async (req, res) => {
  try {
    let updatedUser = await User.findByIdAndUpdate(
      req.params.u_id,
      req.body,
      { new: true }
      //por default esta en false. devuelve el objeto ANTES de la modificacion
      //si lo cambio a true, devuelve el objeto luego de la modificacion
    ).select("name photo mail");
    return res.status(200).json({
      success: true,
      message: "users updated",
      response: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "not updated",
      response: null,
    });
  }
};
