"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SecretariaServices_1 = __importDefault(require("../services/SecretariaServices"));
class SecretariaController {
    constructor() { }
    async listarSecretaria(req, res) {
        const result = await SecretariaServices_1.default.listarSecretaria();
        if (result) {
            res.status(200).json({
                status: 'Secretaria listada com sucesso',
                secretaria: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async atualizarSecretaria(req, res) {
        return res.send('Atualizar Secretaria');
    }
    async criarSecretaria(req, res) {
        const newSecretaria = req.body;
        const result = await SecretariaServices_1.default.criarSecretaria(newSecretaria);
        if (result) {
            res.status(200).json({
                status: 'Secretaria criada com sucesso',
                secretaria: result,
            });
        }
        else {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
    async deletarSecretaria(req, res) {
        const id = req.params.id;
        try {
            await SecretariaServices_1.default.deletarSecretaria(id);
            res.status(200).json({
                status: 'Secretaria deletada com sucesso',
            });
        }
        catch (error) {
            res.status(200).json({
                status: 'erro',
            });
        }
    }
}
exports.default = new SecretariaController();