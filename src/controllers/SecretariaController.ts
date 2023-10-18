import { Secretaria } from '@prisma/client';
import { Request, Response } from 'express';
import SecretariaServices from '../services/SecretariaServices';

class SecretariaController {
  constructor() {}

  async listarSecretaria(req: Request, res: Response) {
    const result = await SecretariaServices.listarSecretaria();
    if (result) {
      res.status(200).json({
        status: 'Secretaria listada com sucesso',
        secretaria: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
  async atualizarSecretaria(req: Request, res: Response) {
    return res.send('Atualizar Secretaria');
  }
  async criarSecretaria(req: Request, res: Response) {
    const newSecretaria: Secretaria = req.body;
    const result = await SecretariaServices.criarSecretaria(newSecretaria);
    if (result) {
      res.status(200).json({
        status: 'Secretaria criada com sucesso',
        secretaria: result,
      });
    } else {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
  async deletarSecretaria(req: Request, res: Response) {
    const id: string = req.params.id;
    try {
      await SecretariaServices.deletarSecretaria(id);
      res.status(200).json({
        status: 'Secretaria deletada com sucesso',
      });
    } catch (error) {
      res.status(200).json({
        status: 'erro',
      });
    }
  }
}

export default new SecretariaController();