const fs = require("fs")

if (fs.existsSync("./mine")){
  console.log("foler already exists");
} else {
  fs.mkdir("./mine", (err) => {
    if(err){
      console.error(err);
    }
    console.log("folder created");
  });
}
