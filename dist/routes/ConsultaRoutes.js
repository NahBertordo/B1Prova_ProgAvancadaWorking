"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultaController_1 = __importDefault(require("../controllers/ConsultaController"));
const ConsultaRouter = (0, express_1.Router)();
ConsultaRouter.get('/consulta', ConsultaController_1.default.listarConsulta);
ConsultaRouter.get('/consulta/:id', ConsultaController_1.default.listarConsulta);
ConsultaRouter.post('/consulta', ConsultaController_1.default.criarConsulta);
ConsultaRouter.patch('/consulta/:id', ConsultaController_1.default.atualizarConsulta);
ConsultaRouter.delete('/consulta/:id', ConsultaController_1.default.deletarConsulta);
exports.default = ConsultaRouter;