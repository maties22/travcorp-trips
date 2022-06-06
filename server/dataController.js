const path = require("path");
const fs = require("fs");

const basePathToData = path.join(__dirname, "trips-data");

const getJsonData = function (basePathToData, filename) {
  const fileName = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(fileName, "utf-8"));
};

exports.getData = function (request, response) {
  const data = getJsonData(basePathToData, "data.json");
  setTimeout(function () {
    return response.send(data);
  }, 100);
};
