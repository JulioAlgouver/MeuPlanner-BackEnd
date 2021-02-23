import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';

interface TokenPayload{
    iat: number;
    exp:number;
    sub: string;
}

export default function ensureAuthenticated(
    request:Request,
    response:Response,
    next:NextFunction
    ) : void {

        // Validação do Token JWT

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError ('Token JWT não localizado!', 401);
    }

    const [,token] = authHeader.split(' ')

    try{
        const decoded = verify(token, authConfig.jwt.secret)

        const { sub } = decoded as TokenPayload;

        request.usuario = {
            apelido: sub,
        };

        return next();
    }catch {
        throw new AppError('Token JWT inválido!', 401);
    }
}