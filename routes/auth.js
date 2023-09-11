import { Router } from "express";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signIn.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

import validator from "../middlewares/validator.js";
import existsUser from "../middlewares/existsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";

let authRouter = Router();

//authRouter.post('/signup', register)
//reguster requiere de middelwares para validar/verificar y esas cosas
// validar datos con joi va a ser nuestro primer middelware
// validar que la cuenta que no existe para que no haya RE-REGISTRO es el segundo middelware
// hashear la contraseña para protegerla es el tercer middelware
authRouter.post(
  "/register",
  validator(registerSchema),
  existsUser,
  isValidPass,
  register
),
  authRouter.post(
    "/signin",
    validator(signinSchema),
    notExistsUser,
    isPassOk,
    isValidToken,
    signin
  );

export default authRouter;
