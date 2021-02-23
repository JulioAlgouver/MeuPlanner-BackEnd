import { Router } from 'express';

import { getCustomRepository } from 'typeorm';
import SessionsRepository from '../repositories/sessionsRepository';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post ('/', async (request, response) => {    

  const { codigo,apelido, senha } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const {usuario,token} = await authenticateUser.execute({
    apelido,
    senha,
  });

  return response.json({ usuario, token });
});

export default sessionsRouter;

sessionsRouter.get ('/', async (request, response) => {
  console.log(request.usuario);

  const sessionsRepository = getCustomRepository(SessionsRepository);
  const sessions = await sessionsRepository.find();

  return response.json(sessions);
})