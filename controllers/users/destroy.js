import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let delete_user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "user deleted",
      response: delete_user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
