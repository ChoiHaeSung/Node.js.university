const fs = require("fs").promises;

async function readDirAsync() {
  try {
    const files = await fs.readdir("./");
    console.log(files);
  } catch (error) {
    console.error(err);
  }
}
readDirAsync();