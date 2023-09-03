import Activity from "../../models/Activity.js"

export default async (req,res, next) =>{
try {
  let oneActivity = await Activity.findOne({_id:req.params.id})
  .select("name price  photo");
  return res.status(200).json({
    success: true,
    message: "Activity Found!",
    response: oneActivity
  })

} catch (error) {
  next(error)
}
}