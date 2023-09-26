//create our first server
const http = require("http");
const server = http.createServer((req, res) => {
  //based on url we show a certain thing(dynamix route a server)
  //log(req) shows alot of data
  console.log(req.url);
  //we listen to request and show response
  if (req.url === "/cars") res.end("CARS!");
  else if (req.url === "/fruits") res.end("Fruits!");
  else res.end("hello from server!");
  //using inbuilt modules of nodejs can be difficult to maintain when there are hundreds of routes, each have controllers etc
  //thats why we use Express, a frameworkf for nodejs
  //built ont top of http module
  //simply and organize this work
});

//listen incoming requests from client
server.listen(8000, "localhost", () => {
  // port, host name, callback function successfully listening
  console.log("server started!"); // la mshiti n l localhost:8000 ghatjbro kidor w sf hit ma emlna walo, khas tzid req res f createserver
});
