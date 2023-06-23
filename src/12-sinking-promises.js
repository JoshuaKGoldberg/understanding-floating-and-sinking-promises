function delayHalfASecond(callback) {
  setTimeout(callback, 500);
}

async function delayedLogic() {
  if (Math.random() > 0.5) {
    throw new Error("Oh no!");
  }
}

delayHalfASecond(delayedLogic);

console.log("All done! :3");
