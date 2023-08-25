//IMPORTS
import "dotenv/config.js"; //importo UNNICAMENTE la configuracio de las variables de entorno
import __dirname from "./utils.js"; //importo la connfiguracion de la ubicacion del servidor (antes, con common.js, venia pre configurada)
import createError from "http-errors"; //crear errores

import express from "express"; //provee metodos y propiedades para levantar servidores

import path from "path"; //para coocer la ubicacion de nuestro servidor

import logger from "morgan"; //para registrar cada una de las peticiones
//var indexRouter = require("./routes/index");    //solo vamos a configurar las rutas del enrutador de bacck principal
import indexRouter from "./routes/index.js"; //este enrutador va a llamar a TODOS los recursos (cities, itineraries, users)
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

let app = express(); //ejecutando el modulo de express: CREO UNA APP DE BACKEND (SERVIDOR)

//VIEW ENGINE SETUP
//SET es el metodo necesario para SETear (configurar) algo (motor de planntillas de vistas de ejs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//MIDDLEWARES
//USE es el metodo necesario para obligar a mi aplicacionn a que use la funcion CADA VEZ que se realiza una SOLICITUD
app.use(logger("dev")); //obligo al servidor a registrar una peticion conn el modulo de logger/morgan
app.use(express.json()); //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false })); //obliga al servidor a leer params/queries
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //obligo al servidor a acceder los archivos estaticos de la carpeta public

//ROUTER
app.use("/api", indexRouter); //obligo al servidor a que use las rutas del enrutador principal con "/api"

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;
