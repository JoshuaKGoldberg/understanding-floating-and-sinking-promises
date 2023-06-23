const fs = require("fs");

function readFileAsync(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync("./local.txt")
  .then((data) => {
    console.log("Done:", data.toString());
  })
  .catch((error) => {
    console.error("Oh no:", error);
  });
