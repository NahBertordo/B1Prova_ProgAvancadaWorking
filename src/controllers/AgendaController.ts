import { Agenda } from '@prisma/client';
import { Request, Response } from 'express';
import AgendaServices from '../services/AgendaServices';

class AgendaController {
  constructor() {}

  async listarAgenda(req: Request, res: Response) {
    const result = await AgendaServices.listarAgenda();
    if (result) {
      res.status(200).json({
        status: 'Agenda listada com sucesso',
        agenda: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
  async atualizarAgenda(req: Request, res: Response) {
    return res.send('Atualizar Agenda');
  }
  async criarAgenda(req: Request, res: Response) {
    const newAgenda: Agenda = req.body;
    const result = await AgendaServices.criarAgenda(newAgenda);
    if (result) {
      res.status(200).json({
        status: 'Agenda criada com sucesso',
        agenda: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }

  async deletarAgenda(req: Request, res: Response) {
    const id: string = req.params.id;
    try {
      await AgendaServices.deletarAgenda(id);
      res.status(200).json({
        status: 'Agenda deletada com sucesso',
      });
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
}

export default new AgendaController();