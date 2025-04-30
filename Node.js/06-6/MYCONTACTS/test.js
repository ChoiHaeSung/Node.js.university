const http = require("http");
const server = http.createServer((req, res)=>{
  console.log("request receiverd");
});

server.listen(3000, () => {
  console.log("server started");
});