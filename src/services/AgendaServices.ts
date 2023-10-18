import { PrismaClient, Agenda } from '@prisma/client';

const prisma = new PrismaClient();

class AgendaServices {
  constructor() {}

  async listarAgenda() {
    try {
      const agenda = await prisma.agenda.findMany();
      return agenda;
    } catch (error) {
      console.log(error);
    }
  }

  async criarAgenda(newAgenda: Agenda) {
    try {
      const agenda = await prisma.agenda.create({
        data: newAgenda,
      });
      return agenda;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarAgenda(id: string, date: Date, nome_paciente: string) {
    try {
      const agenda = await prisma.agenda.update({
        where: { id: id },
        data: {
          date: date,
          nome_paciente: nome_paciente,
        },
      });
      return agenda;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarAgenda(id: string) {
    try {
      await prisma.agenda.delete({
        where: { id: id },
      });
      return console.log('Agenda Deletada');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AgendaServices();