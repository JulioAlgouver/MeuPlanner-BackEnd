import { EntityRepository, Repository} from 'typeorm';


class sessionsRepository extends Repository<any> {
    public async findAll(token: String): Promise<any | null> {
        const localizaSessao = await this.findOne({
            where: {token}
        });

        return localizaSessao || null;
    }
}

export default sessionsRepository;