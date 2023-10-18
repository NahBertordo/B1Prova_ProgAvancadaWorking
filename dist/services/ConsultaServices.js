"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AgendaServices {
    constructor() { }
    async listarAgenda() {
        try {
            const agenda = await prisma.agenda.findMany();
            return agenda;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarAgenda(newAgenda) {
        try {
            const agenda = await prisma.agenda.create({
                data: newAgenda,
            });
            return agenda;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarAgenda(id, date, nome_paciente) {
        try {
            const agenda = await prisma.agenda.update({
                where: { id: id },
                data: {
                    date: date,
                    nome_paciente: nome_paciente,
                },
            });
            return agenda;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarAgenda(id) {
        try {
            await prisma.agenda.delete({
                where: { id: id },
            });
            return console.log('Agenda Deletada');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new AgendaServices();