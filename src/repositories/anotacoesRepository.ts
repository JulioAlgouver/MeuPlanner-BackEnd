import {EntityRepository, Repository} from 'typeorm';

import Anotacao from '../models/Anotacoes';

@EntityRepository(Anotacao)
class anotacoesRepository extends Repository<Anotacao> {
    public async findAll(codigo: String): Promise<Anotacao | null> {
        const localizaAnotacoes = await this.findOne({
            where: {codigo}
        });

        return localizaAnotacoes || null;
    }
}

export default anotacoesRepository;