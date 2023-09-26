const express = require("express");
const fs = require("fs");
const app = express();

//Routage
app.get("/", (req, res) => {
  //Read File, path, encoding, callback, error and data(everything is good) it will read file
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) res.send("Error accessing the file!");

    res.send(data);
  });

  //res.send("Hello from server!!!");
});

app.get("/cars", (req, res) => {
  res.send("Hello cars");
});

app.get("/write", (req, res) => {
  //File, content to write, error
  fs.writeFile("./writedata.txt", "Cherry", (err) => {
    if (err) res.end("error writing in file");
    //it overrides the file
    res.end("writing done successfully!");
  });
});

app.get("/append", (req, res) => {
  //File, content to write, error
  fs.appendFile("./data.txt", "\nCherry", (err) => {
    if (err) res.end("error writing in file");
    //it overrides the file
    res.end("writing/appending done successfully!");
  });
});

//Open server
app.listen(8000, () => {
  console.log("server connected!");
});
