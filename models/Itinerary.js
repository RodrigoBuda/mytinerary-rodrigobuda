import { model, Schema, Types } from "mongoose";

let collection = "itineraries";
let schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number },
  tags: { type: [String] },
  photo: { type: String },
  city_id: { type: Types.ObjectId, required: true, ref: "cities" },
},
{
  timestamps: true
}
);

let Itinerary = model(collection, schema);
export default Itinerary;
