import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateUserService from '../services/CreateUsuarioService';
import UsuariosRepository from '../repositories/usuariosRepository';

const usuariosRouter = Router();

// usuariosRouter.use(ensureAuthenticated);

usuariosRouter.get('/', async (request, response) => {
    const usuariosRepository = getCustomRepository(UsuariosRepository);
    const usuarios = await usuariosRepository.find();

    return response.json(usuarios);
});

usuariosRouter.post('/', async (request, response) => {
        const {
            codigo,
            nome,
            apelido,
            senha,
            email,
            data_cadastro,
            ultima_atualizacao,
        } = request.body;

        const createUsuario = new CreateUserService();
        
        const usuario = await createUsuario.execute({
            codigo,
            nome,
            apelido,
            senha,
            email,
            data_cadastro,
            ultima_atualizacao,
        });

        return response.json(usuario);
});

export default usuariosRouter;