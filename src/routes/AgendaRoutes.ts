import { Router } from 'express';
import AgendaController from '../controllers/AgendaController';

const AgendaRouter = Router();

AgendaRouter.get('/agenda', AgendaController.listarAgenda);

AgendaRouter.get('/agenda/:id', AgendaController.listarAgenda);

AgendaRouter.post('/agenda', AgendaController.criarAgenda);

AgendaRouter.patch('/agenda/:id', AgendaController.atualizarAgenda);

AgendaRouter.delete('/agenda/:id', AgendaController.deletarAgenda);

export default AgendaRouter;