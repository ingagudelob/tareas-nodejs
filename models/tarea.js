const { v4: uuidV4 } = require("uuid");

class Tarea {
  id = "";
  desc = "";
  fechaCompletadoEn = null;

  constructor(desc) {
    this.id = uuidV4(); // esta linea genera un id unico de manera async
    this.desc = desc;
  }
}

module.exports = Tarea;
