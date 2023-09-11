import User from "../models/User.js";

export default async (req, res, next) =>{
    try {
        let one = await User.findOne({mail:req.body.mail}, '-password -_id -__v')
        if (!one){
            return res.status(400).json({
                sucess: false,
                message: 'user has not ben registered',
                response: req.user,
            })
        }else{
            req.user = one
            console.log(req.user)
            return next()
        }
    } catch (error) {
        return next(error)
    }
}