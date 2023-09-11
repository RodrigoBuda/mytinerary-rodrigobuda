import joi from "joi";

let signinSchema = joi.object({

    mail: joi.string().required().min(3).max(25).messages({
        "string.min": "name must have at least 3 characters please!",
        "string.max": "name must be less than 21 characters please!",
        "any.required": "name is required", //para cuando NO se envia el dato
        "string.empty": "name is required",
    }),
    password: joi.string().required().min(3).max(25).messages({
        "string.min": "name must have at least 3 characters please!",
        "string.max": "name must be less than 21 characters please!",
        "any.required": "name is required", //para cuando NO se envia el dato
        "string.empty": "name is required"
    })
})


export default signinSchema