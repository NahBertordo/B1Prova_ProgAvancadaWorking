import { Paciente } from '@prisma/client';
import { Request, Response } from 'express';
import PacienteServices from '../services/PacienteServices';

class PacienteController {
  constructor() {}

  async listarPaciente(req: Request, res: Response) {
    const result = await PacienteServices.listarPaciente();
    if (result) {
      res.status(200).json({
        status: 'Paciente listado com sucesso',
        paciente: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }

  async atualizarPaciente(req: Request, res: Response) {
    return res.send('Atualizar Consulta');
  }

  async criarPaciente(req: Request, res: Response) {
    const newPaciente: Paciente = req.body;
    const result = await PacienteServices.criarPaciente(newPaciente);
    if (result) {
      res.status(200).json({
        status: 'Paciente criado com sucesso',
        paciente: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }

  async deletarPaciente(req: Request, res: Response) {
    const id: string = req.params.id;
    try {
      await PacienteServices.deletarPaciente(id);
      res.status(200).json({
        status: 'Paciente deletado com sucesso',
      });
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
}

export default new PacienteController();