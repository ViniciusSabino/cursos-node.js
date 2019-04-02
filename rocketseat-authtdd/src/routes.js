const routes = require("express").Router();

const SessionController = require("./controllers/SessionController");

routes.post("/sessions", SessionController.store);

// Definição rotas
module.exports = routes;
