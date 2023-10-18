import express, { Request, Response } from 'express';
import PacienteRouter from './routes/PacienteRoutes';
import SecretariaRouter from './routes/SecretariaRoutes';
import ConsultaRouter from './routes/ConsultaRoutes';
import AgendaRouter from './routes/AgendaRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', PacienteRouter);
app.use('/api', SecretariaRouter);
app.use('/api', ConsultaRouter);
app.use('/api', AgendaRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('API - Consultório');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});