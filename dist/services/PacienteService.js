"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PacienteServices {
    constructor() { }
    async listarPaciente() {
        try {
            const pacientes = await prisma.paciente.findMany();
            return pacientes;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarPaciente(newPaciente) {
        try {
            const paciente = await prisma.paciente.create({
                data: newPaciente,
            });
            return paciente;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarPaciente(id, senha, usuario) {
        try {
            const paciente = await prisma.paciente.update({
                where: { id: id },
                data: { senha: senha, usuario: usuario },
            });
            return paciente;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarPaciente(id) {
        try {
            await prisma.paciente.delete({
                where: { id: id },
            });
            return console.log('paciente Deletado');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new PacienteServices();