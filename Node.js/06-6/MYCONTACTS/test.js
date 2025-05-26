const http = require("http");
const server = http.createServer((req,res)=>{
  console.log("requrest received----");
});
server.listen(3000,()=>{
  console.log("server started");
});
