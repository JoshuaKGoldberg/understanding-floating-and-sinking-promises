var fs = require("fs");

function readAndWriteFile(fileName, callback) {
  fs.readFile(fileName, function (error, data) {
    if (error) {
      callback(error);
      return;
    }

    var modified = data.toString() + "!";

    fs.writeFile(fileName, modified, function (error) {
      if (error) {
        callback(error);
        return;
      }

      callback(null, modified);
    });
  });
}

readAndWriteFile("./local.txt", function (error, result) {
  if (error) {
    console.error("Failed with:", error);
  } else {
    console.log("Succeeded with:", result);
  }
});
