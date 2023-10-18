import { Router } from 'express';
import ConsultaController from '../controllers/ConsultaController';

const ConsultaRouter = Router();

ConsultaRouter.get('/consulta', ConsultaController.listarConsulta);

ConsultaRouter.get('/consulta/:id', ConsultaController.listarConsulta);

ConsultaRouter.post('/consulta', ConsultaController.criarConsulta);

ConsultaRouter.patch('/consulta/:id', ConsultaController.atualizarConsulta);

ConsultaRouter.delete('/consulta/:id', ConsultaController.deletarConsulta);

export default ConsultaRouter;