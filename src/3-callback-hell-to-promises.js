const fs = require("fs/promises");

function readAndWriteFile(fileName) {
  return fs.readFile(fileName).then(function (data) {
    const modified = data.toString() + "!";
    return fs.writeFile(fileName, modified).then(function () {
      return modified;
    });
  });
}

readAndWriteFile("./local.txt")
  .then(function (result) {
    console.log("Succeeded with:", result);
  })
  .catch(function (error) {
    console.error("Failed with:", error);
  });
