import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(25).messages({
        "string.min": "name must have at least 3 characters please!",
        "string.max": "name must be less than 21 characters please!",
        "any.required": "name is required", //para cuando NO se envia el dato
        "string.empty": "name is required"
    }),
    mail: joi.string().required(),
    password: joi.string().required(),
    country: joi.string().required(),
    lastName: joi.string().required().min(3).max(25).messages({
        "string.min": "last name must have at least 3 characters please!",
        "string.max": "last name must be less than 21 characters please!",
        "any.required": "last name is required", 
        "string.empty": "last name is required"
    }),
})

export default registerSchema