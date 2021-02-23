import { getRepository } from 'typeorm';

import Anotacao from '../models/Anotacoes';

interface Request {
    codigo: number;
    titulo: string;
    descricao: string;
    data_cadastro: Date;
    ultima_atualizacao: Date;
    owner_user_apelido: string;
}

class CreateAnotacao {
    public async execute({
        codigo,
        titulo,
        descricao,
        data_cadastro,
        ultima_atualizacao,
        owner_user_apelido,
    } : Request) : Promise <Anotacao> {
        const anotacoesRepository = getRepository(Anotacao);

        const anotacao = anotacoesRepository.create({
            codigo,
            titulo,
            descricao,
            data_cadastro,
            ultima_atualizacao,
            owner_user_apelido,
        });

        await anotacoesRepository.save(anotacao)

        return anotacao;
    }
}

export default CreateAnotacao;