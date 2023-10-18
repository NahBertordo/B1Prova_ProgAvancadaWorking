import { Secretaria, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class SecretariaServices {
  constructor() {}

  async listarSecretaria() {
    try {
      const secretaria = await prisma.secretaria.findMany();
      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async criarSecretaria(newSecretaria: Secretaria) {
    try {
      const secretaria = await prisma.secretaria.create({
        data: newSecretaria,
      });
      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarSecretaria(id: string, nome: string, rg: number) {
    try {
      const secretaria = await prisma.secretaria.update({
        where: { id: id },
        data: { nome: nome, rg: rg },
      });
      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarSecretaria(id: string) {
    try {
      await prisma.secretaria.delete({
        where: { id: id },
      });
      return console.log('Secretaria Deletada');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SecretariaServices();