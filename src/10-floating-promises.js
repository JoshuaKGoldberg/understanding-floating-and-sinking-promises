async function main() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (Math.random() > 0.25) {
    throw new Error("Oh no!");
  }
}

main();

console.log("All done! :3");
