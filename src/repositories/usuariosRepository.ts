import { EntityRepository, Repository} from 'typeorm';

import Usuario from '../models/Usuario';

@EntityRepository(Usuario)
class usuariosRepository extends Repository<Usuario> {
    public async findAll(codigo: String): Promise<Usuario | null> {
        const localizaUsuario = await this.findOne({
            where: {codigo}
        });

        return localizaUsuario || null;
    }
}

export default usuariosRepository;