import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let oneUser = await User.findOne({ _id: req.params.user_id }).select(
      "mail photo -_id"
    ); //busca segun el objeto de condiciones(en este caso el id pero podria ser nombre, mail, etc)
    //let oneUserId = await User.findById(req.params.id); //busca por id
    if (oneUser) {
      return res.status(200).json({
        success: true,
        message: "users found",
        response: oneUser,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "user not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
