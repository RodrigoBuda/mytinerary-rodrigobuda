import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let delete_city = await City.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "city deleted",
      response: delete_city,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
