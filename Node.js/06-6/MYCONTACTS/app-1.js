const server = HTMLOutputElement.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "text/plain");

  if(method === "GET" && url === "./home"){
    res.statusCode = 200;
    res.end("HOME");
  } else if (method === "GET" && url === "./about"){
    res.statusCode = 200;
    res.end("ABOUT");
  }
    else {
    res.statusCode = 404;
    res.end("NOT FOUND");
  }
});