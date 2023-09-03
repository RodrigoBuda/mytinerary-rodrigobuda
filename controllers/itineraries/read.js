import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let allItineraries = await Itinerary.find()
    return res.status(200).json({
      success: true,
      message: "Itenaries found!",
      response: allItineraries
    })
  } catch (error) {
    next(error)
  }
}