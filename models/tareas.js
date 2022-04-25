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
}

module.exports = Tareas;
