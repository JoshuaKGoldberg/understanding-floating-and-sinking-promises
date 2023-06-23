const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

readFileAsync("./local.txt")
  .then((data) => {
    console.log("Done:", data.toString());
  })
  .catch((error) => {
    console.error("Oh no:", error);
  });
