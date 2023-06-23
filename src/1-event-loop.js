console.log("A");

setTimeout(function () {
  console.log("B");

  setImmediate(function () {
    console.log("C");
  });
});

setImmediate(function () {
  console.log("D");

  setImmediate(function () {
    console.log("E");
  });
});

console.log("F");
