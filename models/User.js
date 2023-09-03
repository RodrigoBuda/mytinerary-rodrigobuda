import { model, Schema } from "mongoose";

//lo primero que  necesitamos crear en el espacio virtual donde se van a guardar todos los documentos/modelos
//es decir LA COLECCION (conjunto de documentos/modelos de datos)
let collection = "users";

//lo siguiennte es difinir el schema(esquema) de datos del modelo
//es decir EL MOLDE / LA FORMA que tienen que tener mi modelo de datos

let schema = new Schema({
  name: { type: String, required: true }, //por default TODOS los datos son opcionales por default es: (required:false). en este caso es requerido
  lastName: { type: String }, // si es opcional NO NECESITO agregar required
  mail: { type: String, required: true, unique: true }, //unique: true significa que es un dato que no se puede repetir
  photo: {
    type: String,
    default:
      "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
  }, //el usuario puede subir foto pero si no sube, se muestra la foto por defecto
  password: { type: String, required: true },
  country: { type: String, required: true },
});
//para crear un modelo de datos utilizo el metodo model
//pasando como parametros donde tengoo que crear los documentos y con que forma

let User = model(collection, schema);
export default User;
