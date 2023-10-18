"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class SecretariaServices {
    constructor() { }
    async listarSecretaria() {
        try {
            const secretaria = await prisma.secretaria.findMany();
            return secretaria;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarSecretaria(newSecretaria) {
        try {
            const secretaria = await prisma.secretaria.create({
                data: newSecretaria,
            });
            return secretaria;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarSecretaria(id, nome, rg) {
        try {
            const secretaria = await prisma.secretaria.update({
                where: { id: id },
                data: { nome: nome, rg: rg },
            });
            return secretaria;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarSecretaria(id) {
        try {
            await prisma.secretaria.delete({
                where: { id: id },
            });
            return console.log('Secretaria Deletada');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new SecretariaServices();