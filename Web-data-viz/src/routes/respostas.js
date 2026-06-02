var express = require("express");
var router = express.Router();

var respostasController = ("../controllers/respostasController");

router.post("/registrarResposta", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    respostasController.registrarResposta(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    carroController.listar(req, res);
});

module.exports = router;