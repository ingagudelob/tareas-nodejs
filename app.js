const { getGuardar } = require("./helpers/getGuardar");
const { getLeerTareas } = require("./helpers/getLeerTareas");
const { menuInquirer, pausa, leerInput } = require("./helpers/menu");
const Tareas = require("./models/tareas");

require("colors");

// const { mostarMenu, pausa } = require("./helpers/mensajes");

console.clear();

const main = async () => {
  let option = "";

  // Creo una instacia o un objeto de Tareas
  const tareas = new Tareas();

  // Funcion para leer tareas y establecerlas
  // Instancio metodo de lecturo
  const dataTareas = getLeerTareas();

  if (dataTareas) {
    // Establezco las tareas
    // TODO: Cargo las tareas
    tareas.cargarTareasArray(dataTareas);
  }

  do {
    // Imprimir el menú de opciones
    option = await menuInquirer();
    switch (option) {
      case "1":
        // Hago un input a la consola y guardo el retorno en desc
        const desc = await leerInput("Describa la tarea a realizar:");
        tareas.crearTarea(desc);

        break;

      case "2":
        console.log(tareas.arrayTareas);
        tareas.arrayTareas.map((desc) => {
          console.log(desc.desc);
        });
        break;
    }

    //getGuardar(tareas.arrayTareas);
    option !== "0" && (await pausa());
  } while (option !== "0");
};

main();
