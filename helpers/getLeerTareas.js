const fs = require("fs");

const urlData = "./bdJson/data.json";
const getLeerTareas = () => {
  if (!fs.existsSync(urlData)) {
    return null;
  }
  const infoData = fs.readFileSync(urlData, { encoding: "utf-8" });
  // Esta data viene en formato String, debo convertirala JSON para poder manipular los datos con un parse
  const infoDataJSON = JSON.parse(infoData);
  //console.log(infoDataJSON);
  return infoDataJSON;
};

module.exports = {
  getLeerTareas,
};
