import { response } from "express";
import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let { u_id } = req.params;
    let data = req.body;

    let updatedItinerary = await Itinerary.findOneAndUpdate({ _id: u_id }, data, {
      new: true,
    }).select("name price photo");
    if (updatedItinerary) {
      return res.status(200).json({
        success: true,
        message: "Itinerary Updated",
        response: updatedItinerary,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "itinerary not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
