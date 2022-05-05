const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea realizar?",
    choices: [
      { value: "1", name: `${"1.".green} Crear tarea` },
      { value: "2", name: `${"2.".green} Listar tareas` },
      { value: "3", name: `${"3.".green} Mostrar tareas completadas` },
      { value: "4", name: `${"4.".green} Mostrar tareas pendientes` },
      { value: "5", name: `${"5.".green} Completar tareas` },
      { value: "6", name: `${"6.".green} Eliminar tareas` },
      { value: "0", name: `${"0.".green} Salir` },
    ],
  },
];

const menuInquirer = async () => {
  console.clear();
  console.log("=============================".green);
  console.log("    Seleccione una opcion    ");
  console.log("=============================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  console.log("\n");
  const { opc } = await inquirer.prompt([
    {
      type: "input",
      name: "opc",
      message: `Presione ${"ENTER".green} para continuar\n`,
    },
  ]);
};

const leerInput = async (mensaje) => {
  const questionInput = [
    {
      type: "input",
      name: "desc",
      message: mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese una descripción";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(questionInput);
  return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
  // preguntas para eliminar una tarea, afectando el choices
  const choices = tareas.map((tarea, i) => {
    const index = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${index} ${tarea.desc}`,
    };
  });

  const preguntasBorrar = [
    {
      type: "list",
      name: "tarea",
      message: "Borra",
      choices,
    },
  ];
  const { tarea } = await inquirer.prompt(preguntasBorrar);
  return tarea;
};

const confirmarBorrar = async (message) => {
  const confBorrar = [{ type: "confirm", name: "ok", message }];

  const { ok } = await inquirer.prompt(confBorrar);
  return ok;
};

module.exports = {
  menuInquirer,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmarBorrar,
};
