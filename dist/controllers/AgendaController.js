"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AgendaServices_1 = __importDefault(require("../services/AgendaServices"));
class AgendaController {
    constructor() { }
    async listarAgenda(req, res) {
        const result = await AgendaServices_1.default.listarAgenda();
        if (result) {
            res.status(200).json({
                status: 'Agenda listada com sucesso',
                agenda: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async atualizarAgenda(req, res) {
        return res.send('Atualizar Agenda');
    }
    async criarAgenda(req, res) {
        const newAgenda = req.body;
        const result = await AgendaServices_1.default.criarAgenda(newAgenda);
        if (result) {
            res.status(200).json({
                status: 'Agenda criada com sucesso',
                agenda: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async deletarAgenda(req, res) {
        const id = req.params.id;
        try {
            await AgendaServices_1.default.deletarAgenda(id);
            res.status(200).json({
                status: 'Agenda deletada com sucesso',
            });
        }
        catch (error) {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new AgendaController();