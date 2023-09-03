import express from "express";
import create from "../controllers/users/create.js";
import read from "../controllers/users/read.js";
import readOne from "../controllers/users/readOne.js";
import update from "../controllers/users/update.js";
import destroy from "../controllers/users/destroy.js";

let router = express.Router();

//metodo http para crear es POST, para leer es GET
//para actualizar es PUT/PATCH y para eliminar es DELETE

//funcion que se va a ejecutar UNA UNICA VEZ cada vez que se llame al endpoint
//cada vez que realizo una peticion POST, se creará un recurso
//cada vez que realizo una peticion GET, se leeran recursos
//cada vez que realizo una peticion, PUT/PATCH se actualizara un recurso
//cada vez que realizo una peticion, DELETE,se eliminara un recurso

//CREATE
router.post("/signup", create);

//READ
router.get("/", read);
router.get("/:user_id", readOne);

//UPDATE
router.put("/:u_id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
