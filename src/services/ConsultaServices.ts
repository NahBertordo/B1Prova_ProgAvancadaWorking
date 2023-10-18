import { PrismaClient, Consulta } from '@prisma/client';

const prisma = new PrismaClient();

class ConsultaServices {
  constructor() {}

  async listarConsulta() {
    try {
      const consultas = await prisma.consulta.findMany();
      return consultas;
    } catch (error) {
      console.log(error);
    }
  }

  async criarConsulta(newConsulta: Consulta) {
    try {
      const consulta = await prisma.consulta.create({
        data: newConsulta,
      });
      return consulta;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarConsulta(
    id: string,
    nome_paciente: string,
    nome_dents: string,
    id_paciente: string,
    id_agenda: string,
    id_consulta: string
  ) {
    try {
      const consulta = await prisma.consulta.update({
        where: { id: id },
        data: {
          nome_paciente: nome_paciente,
          nome_dents: nome_dents,
          id_paciente: id_paciente,
          id_agenda: id_agenda,
          id_consulta: id_consulta,
        },
      });
      return consulta;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarConsulta(id: string) {
    try {
      await prisma.consulta.delete({
        where: { id: id },
      });
      return console.log('consulta Deletada');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ConsultaServices();