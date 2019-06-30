const express = require("express");

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Vinicius", "email": "vnc.chelsea@gmail.com"}

// CRUD - Create, Read, Update, Delete

const users = ["Diego", "Robson", "Victor"];

// middleware
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }

  req.user = user;

  return next();
}

// ROUTES
server.get("/users", (req, res) => {
  return res.json(req.users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  return res.json(req.users);
});

server.post("/users", checkUserInArray, (req, res) => {
  const { name } = req.body;

  user.push(name);

  return res.json(users);
});

server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  user.splice(index, 1);

  return res.send();
});

// localhost:3000
server.listen(3000);
