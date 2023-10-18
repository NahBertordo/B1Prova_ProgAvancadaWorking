import { PrismaClient, Paciente } from '@prisma/client';

const prisma = new PrismaClient();

class PacienteServices {
  constructor() {}

  async listarPaciente() {
    try {
      const pacientes = await prisma.paciente.findMany();
      return pacientes;
    } catch (error) {
      console.log(error);
    }
  }

  async criarPaciente(newPaciente: Paciente) {
    try {
      const paciente = await prisma.paciente.create({
        data: newPaciente,
      });
      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarPaciente(id: string, senha: number, usuario: string) {
    try {
      const paciente = await prisma.paciente.update({
        where: { id: id },
        data: { senha: senha, usuario: usuario },
      });
      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarPaciente(id: string) {
    try {
      await prisma.paciente.delete({
        where: { id: id },
      });
      return console.log('paciente Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PacienteServices();