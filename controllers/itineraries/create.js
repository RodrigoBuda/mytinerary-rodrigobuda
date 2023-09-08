import Itinerary from '../../models/Itinerary.js';

export default async (req, res, next) => {
  try {
    let data = req.body
    let newItineray = await Itinerary.create(data);
    return res.status(201).json({
      success: true,
      message: 'Itinerary created',
      response: newItineray._id
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}