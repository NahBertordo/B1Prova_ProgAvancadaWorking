import { Router } from 'express';
import SecretariaController from '../controllers/SecretariaController';

const SecretariaRouter = Router();

SecretariaRouter.get('/secretaria', SecretariaController.listarSecretaria);

SecretariaRouter.get('/secretaria/:id', SecretariaController.listarSecretaria);

SecretariaRouter.post('/secretaria', SecretariaController.criarSecretaria);

SecretariaRouter.patch('/secretaria/:id', SecretariaController.atualizarSecretaria);

SecretariaRouter.delete('/secretaria/:id', SecretariaController.deletarSecretaria);

export default SecretariaRouter;