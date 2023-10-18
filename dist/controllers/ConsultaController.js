"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConsultaServices_1 = __importDefault(require("../services/ConsultaServices"));
class ConsultaController {
    constructor() { }
    async listarConsulta(req, res) {
        const result = await ConsultaServices_1.default.listarConsulta();
        if (result) {
            res.status(200).json({
                status: 'Consulta listada com sucesso',
                consulta: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async atualizarConsulta(req, res) {
        return res.send('Atualizar Consulta');
    }
    async criarConsulta(req, res) {
        const newConsulta = req.body;
        const result = await ConsultaServices_1.default.criarConsulta(newConsulta);
        if (result) {
            res.status(200).json({
                status: 'Consulta criada com sucesso',
                consulta: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async deletarConsulta(req, res) {
        const id = req.params.id;
        try {
            await ConsultaServices_1.default.deletarConsulta(id);
            res.status(200).json({
                status: 'Consulta deletada com sucesso',
            });
        }
        catch (error) {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new ConsultaController();