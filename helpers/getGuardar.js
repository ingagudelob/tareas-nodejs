// Este modulo crea el archivo que servirá de respaldo para las tareas
const fs = require("fs");

// Ubicación del archivo - Como este se va a llamar desde el app.js puedo supóner que estoy en la raiz del proyecto

const urlBd = "./bdJson/data.json";

const getGuardar = (data) => {
  // Para guardar la data debo convertirla en un string a traves de JSON.stringfy que convierte en una version JSON string valida
  fs.writeFileSync(urlBd, JSON.stringify(data));
};

module.exports = {
  getGuardar,
};
