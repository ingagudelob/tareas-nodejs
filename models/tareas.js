const Tarea = require("./tarea");

class Tareas {
  // el guion bajo significa privada
  _listadoTareas = {};

  // Con esta funcion get transformo mi objeto de listadoTareas en un array para una mejor lectura y mostrar la lista
  get arrayTareas() {
    const listadoArray = [];
    Object.keys(this._listadoTareas).forEach((key) => {
      const tarea = this._listadoTareas[key];
      listadoArray.push(tarea);
    });
    return listadoArray;
  }

  constructor(tarea) {
    this._listadoTareas = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listadoTareas[tarea.id] = tarea;
  }

  cargarTareasArray(tareas = []) {
    tareas.forEach((tarea) => {
      // Tomó el id y lo establzco en el objeto y luego agrego la tarea
      this._listadoTareas[tarea.id] = tarea;
    });
  }

  listarTareas() {
    this.arrayTareas.forEach((tarea, index) => {
      const item = `${index + 1}.`.green;
      const { desc, fechaCompletadoEn } = tarea;
      const estado =
        fechaCompletadoEn !== null ? `Completada`.green : `Pendiente`.red;

      // console.log(
      //   `${index + 1}.`.green +
      //     ` ${tarea.desc} :: ` +
      //     `${
      //       tarea.fechaCompletadoEn !== null
      //         ? `Completada`.green
      //         : `Pendiente`.red
      //     }`
      // );
      console.log(`${item} ` + `${desc} :: ` + `${estado}`);
    });
  }

  listarTareasCompletadas(state) {
    let cont = 0;
    let cont2 = 0;
    this.arrayTareas.forEach((tarea, index, tareas) => {
      const item = `${index + 1}.`.green;
      const { desc, fechaCompletadoEn } = tarea;
      const estado =
        fechaCompletadoEn !== null ? `Completada`.green : `Pendiente`.red;

      if (fechaCompletadoEn !== null) {
        if (state) {
          cont += 1;
          console.log(`${cont}.`.green + `${desc} :: ` + `${estado}`);
        }
      } else {
        if (!state) {
          cont2 += 1;
          console.log(`${cont2}.`.green + `${desc} :: ` + `${estado}`);
        }
      }
    });
  }
}

module.exports = Tareas;
