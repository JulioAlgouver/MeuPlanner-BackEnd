import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import AppError from '../errors/AppError';
import Usuario from '../models/Usuario';

interface Request {
    codigo: number;
    nome: string;
    apelido: string;
    senha: string;
    email: string;
    data_cadastro: Date;
    ultima_atualizacao: Date;
}

class CreateUserService {
    public async execute({
        codigo,
        nome,
        apelido,
        senha,
        email,
        data_cadastro,
        ultima_atualizacao,
    } : Request): Promise<Usuario> {
        const usuariosRepository = getRepository(Usuario);

        const checkUserExists =  await usuariosRepository.findOne({
            where: {apelido}, 
        })

        if (checkUserExists) {
            throw new AppError('Email já existente!')
        }

        const hashedPassword = await hash(senha, 8)

        const usuario = usuariosRepository.create({
            codigo,
            nome,
            apelido,
            senha: hashedPassword,
            email,
            data_cadastro,
            ultima_atualizacao,
        });

        await usuariosRepository.save(usuario)

        return usuario;
    }
}

export default CreateUserService;