import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AnotacoesRepository from '../repositories/anotacoesRepository';
import CreateAnotacaoService from '../services/CreateAnotacaoService';

const anotacoesRouter = Router();

// anotacoesRouter.use(ensureAuthenticated);

anotacoesRouter.get('/', async (request, response) => {
    const anotacoesRepository = getCustomRepository(AnotacoesRepository)
    const anotacoes = await anotacoesRepository.find()

    return response.json(anotacoes)
})

anotacoesRouter.post('/', async (request, response) => {
    const {
        codigo,
        titulo,
        descricao,
        data_cadastro,
        ultima_atualizacao,
        owner_user_apelido
    } = request.body;

    const createAnotacao = new CreateAnotacaoService();

    const anotacao = await createAnotacao.execute({
        codigo,
        titulo,
        descricao,
        data_cadastro,
        ultima_atualizacao,
        owner_user_apelido
    });

    return response.json(anotacao);
})

export default anotacoesRouter;