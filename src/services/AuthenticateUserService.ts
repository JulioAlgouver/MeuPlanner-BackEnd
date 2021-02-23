import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken'
import authconfig from '../config/auth';

import AppError from '../errors/AppError';

import Usuario from '../models/Usuario';

interface Request {
    apelido: string,
    senha: string,
}

interface Response {
    usuario: Usuario,
    token: String
}

class AuthenticateUserService {
    public async execute({ apelido, senha }: Request):Promise<Response>{
        const usuariosRepository = getRepository(Usuario)

        const usuario = await usuariosRepository.findOne({ where: {apelido} });

        if (!usuario) {
            throw new AppError ('Usuário/Senha incorretos!', 401);
        }

        const passwordMatched = await compare(senha, usuario.senha);

        if (!passwordMatched) {
            throw new AppError ('Usuário/Senha incorretos!', 401);
        }

        const { secret, expiresIn } = authconfig.jwt;

        const token = sign({}, secret , {
            subject: usuario.apelido,
            expiresIn,
        } );
        
        return {
            usuario,
            token,
        };
    }
}

export default AuthenticateUserService;