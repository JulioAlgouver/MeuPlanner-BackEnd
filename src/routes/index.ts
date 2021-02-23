import { Router } from 'express';

/* ROTAS */
import usuariosRouter from './usuarios.routes';
import sessionsRouter from './sessions.routes';
import anotacoesRouter from './anotacoes.routes';

const routes = Router();

routes.use('/usuarios', usuariosRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/anotacoes', anotacoesRouter);

export default routes;