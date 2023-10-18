import { Consulta } from '@prisma/client';
import { Request, Response } from 'express';
import ConsultaServices from '../services/ConsultaServices';

class ConsultaController {
  constructor() {}

  async listarConsulta(req: Request, res: Response) {
    const result = await ConsultaServices.listarConsulta();
    if (result) {
      res.status(200).json({
        status: 'Consulta listada com sucesso',
        consulta: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
  async atualizarConsulta(req: Request, res: Response) {
    return res.send('Atualizar Consulta');
  }
  async criarConsulta(req: Request, res: Response) {
    const newConsulta: Consulta = req.body;
    const result = await ConsultaServices.criarConsulta(newConsulta);
    if (result) {
      res.status(200).json({
        status: 'Consulta criada com sucesso',
        consulta: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }

  async deletarConsulta(req: Request, res: Response) {
    const id: string = req.params.id;
    try {
      await ConsultaServices.deletarConsulta(id);
      res.status(200).json({
        status: 'Consulta deletada com sucesso',
      });
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
}

export default new ConsultaController();