"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PacienteServices_1 = __importDefault(require("../services/PacienteServices"));
class PacienteController {
    constructor() { }
    async listarPaciente(req, res) {
        const result = await PacienteServices_1.default.listarPaciente();
        if (result) {
            res.status(200).json({
                status: 'Paciente listado com sucesso',
                paciente: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async atualizarPaciente(req, res) {
        return res.send('Atualizar Consulta');
    }
    async criarPaciente(req, res) {
        const newPaciente = req.body;
        const result = await PacienteServices_1.default.criarPaciente(newPaciente);
        if (result) {
            res.status(200).json({
                status: 'Paciente criado com sucesso',
                paciente: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async deletarPaciente(req, res) {
        const id = req.params.id;
        try {
            await PacienteServices_1.default.deletarPaciente(id);
            res.status(200).json({
                status: 'Paciente deletado com sucesso',
            });
        }
        catch (error) {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new PacienteController();