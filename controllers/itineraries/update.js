import Itinerary from '../../models/Itinerary.js';

export default async(req, res, next) => {
  try {
    let updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.u_id,
      req.body,
      {new:true}).select("name price photo");
      return res.status(200).json({
        success: true,
        message: "Itinerary Updated",
        response: updatedItinerary
      })
  } catch (error) {
    next(error)
    
  }
}